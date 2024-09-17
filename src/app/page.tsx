'use client';

import NavBar from "components/header";
import {CardSlider} from "components/slider/slider";
import styles from "./home.module.css";
import "components/businessCard.module.css";


function Home() {
  return (
    <div className={styles.backGround}>
      <div className={styles.rectangle}></div>
      <div className={styles.circle}></div>
      <NavBar>
        <div className={styles.box}>
          <div className={styles.title}>
            <h1> Web Site Title</h1>
            <h3>自分のラーニングポートフォリオが作れるサイト</h3>
          </div>
          <div className={styles.description}>
            <p>説明</p>
            <p>説明</p>
          </div>
        </div>
        <div className={styles.slider}>
          <CardSlider></CardSlider>
        </div>
      </NavBar>
    </div>
  );
}

export default Home;