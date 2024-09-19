'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import React, {FC} from "react";
import NavBar from "../components/header";
import styles from "./login.module.css";

type LoginProps = {
    email: string;
    password: string;
}

export default function Login()
{
    const { register, handleSubmit, formState: { errors, isSubmitting },} = useForm<LoginProps>();
    const [error, setError] = useState('');

    return (
        <>
            <NavBar />
            <div className={styles.loginHeader}>
                <div className={styles.login}>
                <form>
                    <h1>マイページログイン</h1>
                    {errors.email && errors.email.message}
                    <p>{error}</p>
                    <p>
                        メールアドレス
                        <input
                            id='email'
                            type="text"
                        />
                    </p>
                    <p>
                        パスワード
                        <input 
                        id="pass" 
                        type="password" 
                        />
                        <button 
                            id='showPass'
                            onClick={showPassword}>
                            表示
                        </button>
                    </p>
                    <button 
                        className={styles.primaryBtn} 
                        onClick={tryLogin}>
                        ログイン
                    </button>
                </form>
                </div>
            </div>
        </>
    )
}

function showPassword(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const password = document.querySelector('input[id="pass"]');
    if (password) {
        if (password.getAttribute('type') === 'password') {
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password');
        }
    }
}

function tryLogin(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const email = document.querySelector('input[type="text"]') as HTMLInputElement | null;
    const password = document.querySelector('input[id="pass"]') as HTMLInputElement | null;

    if (email && password) alert(`Email: ${email.value}, Password: ${password.value}`);
}