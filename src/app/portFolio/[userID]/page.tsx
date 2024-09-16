import { DataBase, FolioProps } from "components/mock/mock"
import { BusinessCard } from "components/businessCard";
import NavBar from "components/header";
import styles from "./userID.module.css"
import "components/businessCard.module.css";


export const PortFolio = ({ params }: { params: { userID: number } }) => {
  const portFolio:FolioProps = DataBase.find(params.userID);
  return (
    <NavBar>
      <div className={styles.portFolioWrap}>
        <BusinessCard params={portFolio} />
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