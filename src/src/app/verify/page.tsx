'use client';

import { useSearchParams, useRouter } from 'next/navigation'
import type React from "react";
import NavBar from "@/components/header/header";
import styles from "./verify.module.css";

import type { AppType } from "packages/backend/src/";
import { hc } from "hono/client";

export default function Verify()
{
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");

  function tryVerify(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const password = document.querySelector('input[id="pass"]') as HTMLInputElement;

    if(email === null || password === null) {
      alert('メールアドレスとワンタイムパスワードを入力してください');
      return;
    }
    verify(email as string, password.value);
  }

  async function verify(email:string, otp:string): Promise<void> {
    const client = hc<AppType>("http://localhost:3000");

    const response = await client.verify.$post({
    json: {
      email: email,
      otp: otp,
      },
    });

    if(response.ok) {
      const data = await response.json();
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      localStorage.setItem('id', data.id);

      router.push("/");
    } else {
      alert('認証に失敗しました');
    }
  };

  return (
    <>
      <NavBar>{null}</NavBar>
      <div className={styles.loginWarp}>
        <div className={styles.login}>
        <form>
          <h1>認証</h1>
          <p>メールアドレス</p>
          <div className={styles.email}>{email}</div>
          <p>
            ワンタイムパスワード
            <input id="pass" maxLength={6} type="text" className={styles.password} />
          </p>
        <button 
            id='login'
            className={styles.primaryBtn} 
            type='submit'
            onClick={tryVerify}>
            認証
          </button>
        </form>
        </div>
      </div>
    </>
  )
}
