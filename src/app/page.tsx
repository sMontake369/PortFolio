'use client';

import NavBar from "./_components/header";
import styles from "./home.module.css";
import "./_components/stickyNote.module.css";
import StickySlider from "./_components/slider/slider"

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
        <StickySlider></StickySlider>
      </NavBar>
    </div>
  );
}

export default Home;