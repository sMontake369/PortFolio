import { useEffect } from "react";
import type {FolioProps} from "@/components/mock/mock"
import styles from "./panel.module.css";
import { BusinessCard } from "../businesscard/businessCardFront";
import { BusinessCardRear } from "../businesscard/businessCardRear";
import { useState } from 'react'

  type Props = {
    close?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    folio : FolioProps;
  };

  const Panel: React.FC<Props> = props => {
    const [isFront, setIsFront] = useState(false)

    const toggleModal = () => {
      setIsFront(!isFront)
    }

    useEffect(() => {
      const CARD = document.querySelector(`.${styles.BusinessCard}`) as HTMLElement;
      if (!CARD) return;

      const UPDATE = ({ x, y }: { x: number; y: number }) => {
        const BOUNDS = CARD.getBoundingClientRect();
        const posX = x - BOUNDS.x;
        const posY = y - BOUNDS.y;
        const ratioX = posX / BOUNDS.width;
        const ratioY = posY / BOUNDS.height;
        CARD.style.setProperty('--ratio-x', ratioX.toString());
        CARD.style.setProperty('--ratio-y', ratioY.toString());
      };

      document.body.addEventListener('pointermove', UPDATE);

      return () => {
        document.body.removeEventListener('pointermove', UPDATE);
      };
    }, []);

    return (
      <div className={styles.panelWrap}>
        <section className={styles.BusinessCard} onClick={toggleModal} onKeyUp={toggleModal}>
          <div className={`${styles.BusinessCardFront} ${isFront ? styles.rotated : ''}`}><BusinessCard params={{ folio: props.folio}} /></div>
          <div className={`${styles.BusinessCardRear} ${!isFront ? styles.rotated : ''}`}><BusinessCardRear params={{ folio: props.folio}} /></div>
        </section>
      </div>
    );
  };

  export default Panel;
