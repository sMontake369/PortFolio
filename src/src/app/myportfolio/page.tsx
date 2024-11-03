'use client';

import NavBar from "@/components/header/header";
import styles from "./myportfolio.module.css";
import type { FolioProps , Contact } from "@/components/mock/mock";
import { BusinessCard } from "@/components/businesscard/businessCardFront";
import { BusinessCardRear } from "@/components/businesscard/businessCardRear";
import { useState } from "react";
import { useEffect } from "react";

import type { AppType } from "packages/backend/src/";
import { hc } from "hono/client";
import { useRouter } from 'next/navigation'

export default function portFolioEdit() {

  const [folio, setFolio] = useState<FolioProps>(
    {
      userID: "",
      name: "",
      age: 0,
      description: "",
      tags: [],
      qualifications: [],
      contacts : [],
      qualificationReviews: [],
    }
  );
  const [oldFolio, setOldFolio] = useState<FolioProps>()

  const [userID, setUserID] = useState<string>("");

  const client = hc<AppType>("http://localhost:3000");
  const router = useRouter();

  const [tagNum, setTagNum] = useState(1);
  const [qualificationNum, setQualificationNum] = useState(1);
  const [contactsNum, setContactsNum] = useState(1);

  const addTagElement = () => {
    if(tagNum > 5) { 
      alert("タグは5つまでです。");
      return; 
    }

    setFolio((prevFolio) => ({ ...prevFolio, tags: [...(prevFolio?.tags || []), ""] }));
    setTagNum(tagNum + 1);
  }

  const removeTagElement = () => {
    if(tagNum < 1) { return; }
    setFolio((prevFolio) => ({ ...prevFolio, tags: prevFolio?.tags?.slice(0, -1) }));
    setTagNum(tagNum - 1);
  }

  const addQualificationElement = () => {

    setQualificationNum(qualificationNum + 1);
    setFolio((prevFolio) => ({ ...prevFolio, qualifications: [...(prevFolio?.qualifications || []), ""] }));
  }

  const removeQualificationElement = () => {
    if(qualificationNum < 1) { return; }
    setFolio((prevFolio) => ({ ...prevFolio, qualifications: prevFolio?.qualifications?.slice(0, -1) }));
    setQualificationNum(qualificationNum - 1);
  }

  const addContactsElement = () => {
    if (contactsNum > 3) {
      alert("連絡先は3つまでです。");
      return;
    }

    setContactsNum(contactsNum + 1);
    setFolio((prevFolio) => ({ ...prevFolio, contacts: [...(prevFolio?.contacts || []), { method: "", contact: "" }] }));
  }

  const removeContactsElement = () => {
    if(contactsNum < 1) { return; }
    setFolio((prevFolio) => ({ ...prevFolio, contacts: prevFolio?.contacts?.slice(0, -1) }));
    setContactsNum(contactsNum - 1);
  }

  useEffect(() => {
    const storedUserID = localStorage.getItem("id");
    if (storedUserID) {
      setUserID(storedUserID);
    } else {
      alert("ポートフォリオを作成、又は編集するには先にログインしてください。");
      router.push("/signin");
    }

    if(storedUserID) GetPortFolio(storedUserID);

    async function GetPortFolio(userId: string): Promise<void> {
      const response = await client.folios[`${userId}`].$get();
      if (response.ok) {
        const data = await response.json();
        setFolio(data);
        setOldFolio(JSON.parse(JSON.stringify(data))); // 深いコピー

        setTagNum(data.tags ? data.tags.length + 1 : 1);
        setQualificationNum(data.qualifications ? data.qualifications.length + 1 : 1);
        setContactsNum(data.contacts ? data.contacts.length + 1 : 1);
        
        const submitButton = document.getElementById('submit');
        if (submitButton) {
          submitButton.textContent = '更新';
        }
      }
    }
  }, []);

  async function SetPortFolio(userId: string): Promise<void> {
    const response = await client.folios[`${userId}`].$get();
    if(response.ok) {
      UpdatePortFolio()
    } else {
      CreatePortFolio()
    }
    return;
  }

  async function CreatePortFolio() : Promise<void> {
    const headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
    const response = await client.folios.$post({
      json: {
        name: folio?.name ? folio.name : "",
        age: folio?.age ? Number(folio.age) : 0,
        gender: folio?.gender ? folio.gender : undefined,
        description: folio?.description ? folio.description : undefined,
        qualifications: folio?.qualifications ? folio.qualifications : undefined,
        tags: folio?.tags ? folio.tags : undefined,
        contacts: folio?.contacts ? folio.contacts : undefined
      }
    }, 
    {
      headers: headers
    });
    if(response.ok) {
      alert("作成しました。");
      window.location.reload();
    }
  }

  async function UpdatePortFolio(): Promise<void> {
    const headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
  
    const removedQualifications = oldFolio?.qualifications?.filter(qualification => 
      !folio?.qualifications?.includes(qualification)
    ).map(qualification => ({ value: qualification, operation: "remove" }));
  
    const removedTags = oldFolio?.tags?.filter(tag => 
      !folio?.tags?.includes(tag)
    ).map(tag => ({ value: tag, operation: "remove" }));
  
    const removedContacts = oldFolio?.contacts?.filter(oldContact => 
      !folio?.contacts?.some(folioContact => 
        folioContact.method === oldContact.method && folioContact.contact === oldContact.contact
      )
    ).map(contact => ({
      id: contact.id,
      operation: "remove"
    }));
  

    const addedQualifications = folio?.qualifications
    ?.filter(qualification => qualification.trim() !== "")
    .map(qualification => ({
      value: qualification, operation: "add"
    }));
  
    const addedTags = folio?.tags
    ?.filter(tag => tag.trim() !== "")
    .map(tag => ({
      value: tag,
      operation: "add"
    }));
  
  const addedContacts = folio?.contacts
    ?.filter(contact => contact.contact.trim() !== "" && contact.method.trim() !== "")
    .map(contact => ({
      value: contact,
      operation: "add"
    }));
  
    const qualifications = [...(addedQualifications || []), ...(removedQualifications || [])];
    const tags = [...(addedTags || []), ...(removedTags || [])];
    const contacts = [...(addedContacts || []), ...(removedContacts || [])];
  
    const response = await client.folios[":userId"].$patch({
      param: {
        userId: userID,
      },
      json: {
        name: folio?.name ? folio.name : undefined,
        age: folio?.age ? Number(folio.age) : undefined,
        gender: folio?.gender ? folio.gender : undefined,
        description: folio?.description ? folio.description : undefined,
        qualifications: qualifications.length > 0 ? qualifications : undefined,
        tags: tags.length > 0 ? tags : undefined,
        contacts: contacts.length > 0 ? contacts : undefined
      }
    },
    {
      headers: headers
    });

    if (response.ok) {
      alert("更新しました。");
      window.location.reload();
    } else {
      alert("更新に失敗しました。");
    }
  }

  function updateFolio<K extends keyof FolioProps>(key: K, value: FolioProps[K]) {
    setFolio((prevFolio) => ({ ...prevFolio, [key]: value }));
  }

  function updateFolioArray<K extends keyof { [P in keyof FolioProps as FolioProps[P] extends Extract<FolioProps[keyof FolioProps], unknown[]> | undefined ? P : never]: FolioProps[P] }>(key: K, arrayNum: number, value: string) {  
    if (folio?.[key] !== undefined && Array.isArray(folio[key])) {
      setFolio((prevFolio) => {
        prevFolio[key] ? prevFolio[key][arrayNum] = value : prevFolio[key] = [value];
        return prevFolio;
      });
      setFolio((prevFolio) => ({ ...prevFolio, [key]: prevFolio[key] }));
    }
  }

  function updateFolioContacts<K extends keyof Contact>(prop: K, arrayNum: number, value: string) {
    setFolio((prevFolio) => {
      const updatedContacts = [...(prevFolio.contacts || [])];
      if (updatedContacts[arrayNum]) {
        updatedContacts[arrayNum][prop] = value;
      }
      return { ...prevFolio, contacts: updatedContacts };
    });
  }

  function autoResize(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  return (
    <NavBar>
      <div className={styles.subTitle}>
        <h1>ポートフォリオ編集</h1>
        <div className={styles.businessCard}>
          <div className={styles.businessCardFront}>
            <BusinessCard params={{ folio: folio ?? folio }} />
          </div>
          <div className={styles.businessCardRear}>
            <BusinessCardRear params={{ folio: folio }} />
          </div>
        </div>
        <div className={styles.edit}>
          <form className={styles.editForm}>
            <div className={styles.FormItem}>
              <p className={styles.FormItemLabel}>
                氏名
              </p>
              <input type="text" 
                value={folio?.name} 
                maxLength={20}
                onChange={(e) => updateFolio('name', e.target.value)} 
                className={styles.FormItemInput} 
                placeholder="例）高専太郎"
              />
             </div>
            <div className={styles.FormItem}>
              <p className={styles.FormItemLabel}>
                性別
              </p>
              <select value={folio?.gender} onChange={(e) => updateFolio('gender', e.target.value)} className={styles.FormItemInput}>
                <option value="man">男性</option>
                <option value="woman">女性</option>
                <option value="other">その他</option>
              </select>
            </div>
            <div className={styles.FormItem}>
              <p className={styles.FormItemLabel}>
                年齢
              </p>
              <input 
                type="number" 
                value={folio?.age} 
                min={0}
                max={100}
                onChange={(e) => updateFolio('age', Number(e.target.value))} 
                className={styles.FormItemInput} 
                placeholder="例）25"/>
            </div>
            <div className={styles.FormItem}>
              <p className={styles.FormItemLabel}>
                自己紹介
              </p>
              <textarea 
                value={folio?.description}
                maxLength={360}
                onChange={(e) => updateFolio('description', e.target.value)} 
                className={styles.FormItemInput}
                rows={1}
                onInput={autoResize}
                placeholder="例）Webエンジニアです。よろしくお願いします。"/>
            </div>
            {folio?.tags?.map((tag, index) => (
              <div key={`tag${index + 1}`} className={styles.FormItem}>
                <p className={styles.FormItemLabel}>タグ{index + 1}</p>
                <input
                  className={styles.FormItemInput}
                  type="text"
                  maxLength={20}
                  value={tag || ""}
                  onChange={(e) => updateFolioArray('tags', index, e.target.value)}
                  placeholder="例）React"
                />
              </div>
            ))}
            <div className={styles.button}>
              <button type="button" onClick={addTagElement} className={styles.addButton}>タグを追加</button>
              <button type="button" onClick={removeTagElement} className={styles.removeButton}>タグを削除</button>
            </div>
            {folio?.qualifications?.map((qualification, index) => (
              <div key={`qualification${index + 1}`} className={styles.FormItem}>
                <p className={styles.FormItemLabel}>資格{index + 1}</p>
                <input
                  className={styles.FormItemInput}
                  type="text"
                  maxLength={20}
                  value={qualification || ""}
                  onChange={(e) => updateFolioArray('qualifications', index, e.target.value)}
                  placeholder="例）応用情報技術者"
                />
              </div>
            ))}
            <div className={styles.button}>
              <button type="button" onClick={addQualificationElement} className={styles.addButton}>資格を追加</button>
              <button type="button" onClick={removeQualificationElement} className={styles.removeButton}>資格を削除</button>
            </div>

            {folio?.contacts?.map((contact, index) => (
              <div key={`contact${index + 1}`} className={styles.FormItem}>
                <p className={styles.FormItemLabel}>連絡先{index + 1}</p>
                <input
                  className={styles.FormItemInput}
                  type="text"
                  maxLength={10}
                  value={contact.method || ""}
                  onChange={(e) => updateFolioContacts('method', index, e.target.value)}
                  placeholder="例）mail"
                />
                <input
                  className={styles.FormItemInput}
                  type="text"
                  maxLength={30}
                  value={contact.contact || ""}
                  onChange={(e) => updateFolioContacts('contact', index, e.target.value)}
                  placeholder="例) test@gmail.com"
                />
              </div>
            ))}
            <div className={styles.button}>
              <button type="button" onClick={addContactsElement} className={styles.addButton}>コンタクトを追加</button>
              <button type="button" onClick={removeContactsElement} className={styles.removeButton}>コンタクトを削除</button>
            </div>
            <button className={styles.submit} id="submit" type="button" onClick={() => SetPortFolio(userID)}>作成</button>
          </form>
        </div>
      </div>
    </NavBar>
  );
}
