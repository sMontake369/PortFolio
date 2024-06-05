import {DataBase,PortFolioProps} from "../../page"
import NavBar from "../../_components/header";

import { StickyNote } from "../../_components/stickyNote";

import "../../_components/stickyNote.module.css";
import styles from "./userID.module.css"


export const PortFolio = ({ params }: { params: { userID: number } }) => {
  const portFolio:PortFolioProps = DataBase.find(params.userID);
  return (
    <NavBar>
      <StickyNote params={portFolio} />
      <div className={styles.note}>
        <h1>ノート</h1>
        <div className={styles.description}>
          {portFolio.description}
        </div>
      </div>
    </NavBar>
  )
};

export default PortFolio;