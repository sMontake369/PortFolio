import { portFolioMock } from "../page";
import { StickyNote } from "../_components/stickyNote";
import styles from "./portFolio.module.css";
import "../_components/stickyNote.module.css";
import NavBar from "../_components/header";

export default function portFolio() {
  return (
    <NavBar>
      <div className={styles.contents}>
				<h1>ポートフォリオ一覧</h1>
				<div className={styles.searchBar}>
					<input type="text" placeholder="検索" /> <button>検索</button>
				</div>
				<div className={styles.portFolioList}>
					{portFolioMock.map((portFolio) => (
						<div className={styles.portFolio} key={portFolio.userID}>
							<a href={`/portFolio/${portFolio.userID}`}><StickyNote params={portFolio} /></a>
						</div>
					))}
				</div>
			</div>
    </NavBar>
  );
}