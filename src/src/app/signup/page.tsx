'use client';

import { useRouter } from 'next/navigation'
import NavBar from "@/components/header/header";
import styles from "./signup.module.css";

import type { AppType } from "packages/backend/src/";
import { hc } from "hono/client";

function signIn(email: string): void {
  const client = hc<AppType>("http://localhost:3000");

  client.signup.$post({
    json: {
      email: email,
    }
});
}

export default function signup() {
  const router = useRouter();

  const trySignup = (event: React.MouseEvent<HTMLButtonElement>) => {
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
      <div className={styles.signupWarp}>
        <div className={styles.signup}>
          <form>
            <h1>新規登録</h1>
            <p>メールアドレス
              <input id='email' type="email" className={styles.mail}/>
            </p>
            <button
              id='login'
              className={styles.primaryBtn}
              type='submit'
              onClick={trySignup}
            >
              登録
            </button>
          </form>
          <a className={styles.signin} href='/signin'>ログインする</a>
        </div>
      </div>
    </>
  );
}
