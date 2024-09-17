import {folioMock} from "components/mock/mock"
import { BusinessCard } from "components/businessCard";
import "components/businessCard.module.css";
import styles from "./portFolio.module.css";
import NavBar from "components/header";

export default function portFolio() {
  return (
    <NavBar>
      <div className={styles.contents}>
				<h1>ポートフォリオ一覧</h1>
				<div className={styles.searchBar}>
					<input type="text" placeholder="検索" /> <button>検索</button>
				</div>
				<div className={styles.businessCardList}>
					{folioMock.map((portFolio) => (
						<div className={styles.businessCard} key={portFolio.userID}>
							<a href={`/portFolio/${portFolio.userID}`}><BusinessCard params={portFolio} /></a>
						</div>
					))}
				</div>
			</div>
    </NavBar>
  );
}