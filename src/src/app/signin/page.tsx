'use client';

import { useRouter } from 'next/navigation'
import NavBar from "@/components/header/header";
import styles from "./signin.module.css";

import type { AppType } from "packages/backend/src/";
import { hc } from "hono/client";

function signIn(email: string): void {
  const client = hc<AppType>("http://localhost:3000");

  client.signin.$post({
    json: {
      email: email,
    }
  });
}

export default function Login() {
  const router = useRouter();

  const tryLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('tryLogin');
    event.preventDefault();
    const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
    if(emailInput.value !== "" && emailInput.value.indexOf("@") !== -1) {
      signIn(emailInput.value);
      router.push(`/verify?email=${emailInput.value}`);
    } else {
      alert('正しいメールアドレスを入力してください');
      return;
    }
  };

  return (
    <>
      <NavBar>{null}</NavBar>
      <div className={styles.loginWarp}>
        <div className={styles.login}>
          <form>
            <h1>マイページログイン</h1>
            <p>メールアドレス
              <input id='email' type="email" className={styles.mail}/>
            </p>
            <button
              id='login'
              className={styles.primaryBtn}
              type='submit'
              onClick={tryLogin}
            >
              ログイン
            </button>
          </form>
          <a className={styles.signup} href='/signup'>アカウントを新規作成する</a>
        </div>
      </div>
    </>
  );
}
