'use client';

import { useState, useEffect } from 'react'
import styles from "./header.module.css";
import Avatar from "boring-avatars";
import { generateColors } from "@/components/businesscard/businessCardFront";
import { useRouter } from 'next/navigation'

import type { AppType } from "packages/backend/src/";
import { hc } from "hono/client";
import type React from 'react';

export default function NavBar({ children }: { children: React.ReactNode }) {

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <a href="/">ポートフォリオサイト</a>
        </div>
        <div className={styles.icon}>
          <LoginStatus />
        </div>
      </div>
      <main className={styles.main}>{children}</main>
    </>
  );
};

function LoginStatus() {
  const router = useRouter();
  const [userID, setUserID] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const storedUserID = localStorage.getItem("id");
    if (storedUserID) {
      setUserID(storedUserID);
    }
    const client = hc<AppType>("http://localhost:3000");

    async function refresh(refreshToken: string): Promise<void> {
      const headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
      const response = await client.refresh.$post({
        json: {
          refreshToken: refreshToken
        }
      },
      {
        headers: headers
      });
      if(response.ok) { 
        const data = await response.json();
        localStorage.setItem('accessToken', data.accessToken);
      } else { 
        alert("セッションが切れました。再度ログインしてください。");
        logOut(); 
      }
    }

    const DoRefresh = async () => {
      const refreshToken = localStorage.getItem("refreshToken");
      if(refreshToken !== null) { await refresh(refreshToken); }
    };
    DoRefresh();
  }, []);


  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const logOut = () => {
    localStorage.removeItem('id')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    router.push("/");
    window.location.reload();
  }

  if (userID) {
    return (
      <>
        <div className={styles.userIcon} onClick={toggleModal} onKeyUp={toggleModal}>
          <Avatar
            size={"55px"}
            name={userID}
            variant="beam"
            colors={generateColors(userID)}
          />
        </div>
        {isOpen && (
          <div className={styles.loginBoxItem}>
            <div className={`${styles.loginItem} ${styles.color1}`}>
              <a href={"/"}>ホーム</a>
            </div>
            <div className={`${styles.loginItem} ${styles.color2}`}>
              <a href={"/portfolio"}>ポートフォリオ一覧</a>
            </div>
            <div className={`${styles.loginItem} ${styles.color3}`}>
              <a href={"/myportfolio"}>自分のポートフォリオ</a>
            </div>
            <div className={`${styles.loginItem} ${styles.color4}`}>
              <p onClick={logOut} onKeyUp={toggleModal}>ログアウト</p>
            </div>
          </div>
			  )}
      </>
    );
  }
  return (
    <div className={styles.loginIcon}>
      <a href="/signin">ログイン</a>
    </div>
  );
}
