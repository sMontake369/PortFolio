'use client';

import type { FolioProps } from "@/components/mock/mock"
import { BusinessCard } from "@/components/businesscard/businessCardFront";
import "@/components/businesscard/businessCardFront.module.css";
import styles from "./portfolio.module.css";
import NavBar from "@/components/header/header";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from 'next/navigation'
import Modal from "@/components/modal/modal";
import Panel from "@/components/modal/panel";

import { motion } from "framer-motion";

import type { AppType } from "packages/backend/src/";
import { hc } from "hono/client";

export default function Portfolio() {

	const [isOpen, setIsOpen] = useState(false);
  const [isData, setIsData] = useState(false);
	const [folioPropList, setFolioPropList] = useState<FolioProps[]>([]);
  const [folioProp, setFolioProp] = useState<FolioProps>();
	const searchParams = useSearchParams();
	const client = hc<AppType>("http://localhost:3000");
  const router = useRouter();

  async function GetPortFolio(q:string): Promise<void> {
    let query = q;
    if(query === "") query = searchParams.get("q") as string;
    if(query === null) query = " ";
    const response = await client.search.$get({
      query: {
        q: query,
      },
    });

    if (response.ok) {
      const data = await response.json();
      const folioProp: FolioProps[] = [];
      setFolioPropList([]);
      for (const folio of data) {
        folioProp.push({
          userID: folio.userId !== undefined ? folio.userId : "",
          name: folio.name !== undefined ? folio.name : "",
          age: folio.age !== undefined ? folio.age : 0,
          gender: folio.gender !== undefined ? folio.gender : "",
          personnelType: folio.personnelType !== undefined ? folio.personnelType : "",
          tags: folio.tags !== undefined ? folio.tags : undefined,
          qualifications: folio.qualifications !== undefined ? folio.qualifications : undefined,
          contacts: folio.contacts !== undefined ? folio.contacts : undefined,
          description: folio.description !== undefined ? folio.description : "",
          impression: folio.impression !== undefined ? folio.impression : 0,
          qualificationReviews: folio.qualificationReviews !== undefined ? folio.qualificationReviews : undefined,
        });
      }
      setFolioPropList(folioProp);
      if (folioProp.length === 0) {
        setIsData(false);
      } else {
        setIsData(true);
      }
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation> //わからん
  useEffect(() => {
    const fetchData = async () => {
      await GetPortFolio("");
    };

    if (typeof window !== 'undefined') {
      const textForm = document.getElementById("search");
      if(textForm) textForm.addEventListener("keydown", enterKeyPress);
    }

    function enterKeyPress(event: KeyboardEvent){
      if(event.key === 'Enter') { Search(); }
    }
    fetchData();
  }, []);

  const toggleModal = (folio: FolioProps) => {
		setIsOpen(!isOpen);
    setFolioProp(folio);
	};

	async function Search(): Promise<void> {
		const input = document.querySelector('input[type="search"]');
    if(input instanceof HTMLInputElement) {
      await GetPortFolio(input.value);
      router.push(`/portfolio?q=${input.value}`);
    }
	}
    
  return (
    <NavBar>
      <div className={styles.subTitle}>
        <h1>ポートフォリオ一覧</h1>
        <div className={styles.searchBar}>
          <input type="search" id="search" placeholder="例: 高専太郎　基本情報技術者" />
          <button type="button" onClick={Search}>検索</button>
        </div>
        {isData && (
          <div className={styles.businessCardList}>
            {folioPropList.map((portFolioProp) => (
              <motion.div 
                className={styles.businessCard} 
                key={portFolioProp.userID}
                onClick={() => toggleModal(portFolioProp)}
                onKeyUp={() => toggleModal(portFolioProp)}
                initial={{ x: 0, y: 50, opacity: 0 }} 
                whileInView={{ x: 0, y: 0, opacity: 1 }} 
                transition={{ duration: 1.5, delay: 0.5, type: 'spring' }}
                viewport={{ once: true }}
              >
                <BusinessCard params={{ folio: portFolioProp }} />
              </motion.div>
            ))}
          </div>
        )}
        {!isData && (
          <div className={styles.noData}>
            <p>条件に一致するポートフォリオがありませんでした...</p>
          </div>
        )}
      </div>
      {isOpen && (
        <div className={styles.modal}>
          <Modal close={() => toggleModal(folioProp as FolioProps)}>
            <Panel folio={folioProp as FolioProps} />
          </Modal>
        </div>
      )}
    </NavBar>
  );
}
