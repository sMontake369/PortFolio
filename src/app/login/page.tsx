import React, {FC} from "react";
import { NextPage } from 'next';
import "./login.css";

const HomePage: NextPage = () => 
{
    return (
        <div className="login-header">
            <div className="login">
                <FormItem string1="メールアドレス" string2="パスワード" />
            </div>
        </div>
    )
}

interface LoginProps {
    string1: string;
    string2: string;
}

const FormItem: FC<LoginProps> = ({ string1, string2 }) => 
{
    return (
        <div>
            <h1>マイページログイン</h1>
            <p>{string1}<input type="text" /></p><p>{string2}<input type="text" /></p>
            <button className="primary-btn">ログイン</button> 
        </div>
    );
};

export default HomePage;
