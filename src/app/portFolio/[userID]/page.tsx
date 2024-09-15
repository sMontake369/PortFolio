import { DataBase, PortFolioProps } from "components/mock/mock"
import { StickyNote } from "components/stickyNote";
import NavBar from "components/header";
import styles from "./userID.module.css"
import "components/stickyNote.module.css";


export const PortFolio = ({ params }: { params: { userID: number } }) => {
  const portFolio:PortFolioProps = DataBase.find(params.userID);
  return (
    <NavBar>
      <div className={styles.portFolioWrap}>
        <StickyNote params={portFolio} />
      </div>
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