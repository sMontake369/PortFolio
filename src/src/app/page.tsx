'use client';

import NavBar from "@/components/header/header";
import {CardSlider} from "@/components/slider/slider";
import styles from "./home.module.css";
import "@/components/businesscard/businessCardFront.module.css";
import { motion } from "framer-motion";
import titleLogo from "@/components/images/titleLogo.png";

function Home() {
  return (
    <div className={styles.backGround}>
      <div className={styles.rectangle} />
      <div className={styles.circle} />
      <NavBar>
        <div className={styles.box}>
          <div className={styles.title}>
            <img src={titleLogo.src} alt="titleLogo" />
            <h3>自分のラーニングポートフォリオが作れるサイト</h3>
          </div>
          <div className={styles.description}>
            <p>自分の学習進捗やスキル、プロジェクトの成果を一元的に管理し、</p>
            <p>他者と共有できるオンラインプラットフォームです。個々の学びを整理し、</p>
            <p> キャリアの発展や採用プロセスでの自己アピールに活用できます。</p>
          </div>
        </div>
        <a href="/portfolio?q=''" className={styles.folioButton}>
          ポートフォリオを見てみる!
        </a>
        <motion.div 
          className={styles.slider} 
          initial={{ x: 0, y: 25, opacity: 0 }} 
          whileInView={{ x: 0, y: 0, opacity: 1 }} 
          transition={{ duration: 1.5, delay: 0.5, type: 'spring' }}
          viewport={{ once: true }}
        >
          <CardSlider />
        </motion.div>
      </NavBar>
    </div>
  );
}

export default Home;
