import NavBar from "./_components/header";
import styles from "./home.module.css";
import { StickyNote } from "./_components/stickyNote";
import "./_components/stickyNote.module.css";

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
        <div className={styles.portFolioList}>
					{portFolioMock.map((portFolio) => (
						<div className={styles.portFolio} key={portFolio.userID}>
							<a href={`/portFolio/${portFolio.userID}`}><StickyNote params={portFolio} /></a>
						</div>
					))}
				</div>
      </NavBar>
    </div>
  );
}

export default Home;

export interface PortFolioProps {
  userID: number;
  name: string;
  age: number;
  gender: string;
  description: string;
  qualification: string[];
  skill: string[];
  tagList: string[];
  contact: string;
  impression: number;
}


export const portFolioMock: PortFolioProps[] = [
  {
      userID: 321,
      name: "大竹智之　サイズチェック",
      age: 20,
      gender: "男",
      description: "高専での学びを通して、実践的なスキルと理論的な知識をバランスよく身につけました。<script>alert(XSS!)</script>特に、プロジェクトベースの学習では、チームでの協働や問題解決能力が鍛えられました。Pythonを用いたデータ解析や、Arduinoを使ったロボット製作など、実際の課題に取り組む中で、理論を実践に生かす力を養いました。今後は、これらの経験を基に、さらに専門的な技術を深め、社会に貢献できるエンジニアを目指していきたいと思います。",
      qualification:["Oracle Master","HTML", "CSS"],
      skill: ["HTML", "CSS"],
      tagList: ["酒カス", "Pythonアンチ", "学校は家", "男女割合10:0","月3映画","サイズチェック","サイズチェック","サイズチェック","サイズチェック","サイズチェック","サイズチェック"],
      contact: "a@gmail.com",
      impression: 5
  },
  {
      userID: 100,
      name: "名前1",
      gender: "男",
      age: 20,
      description: "こんにちは、名前2です。よろしくお願いします。",
      qualification: ["MOS","FE", "危険物取扱者"],
      skill: ["HTML", "CSS", "JavaScript"],
      tagList: ["Python", "Arduino"],
      contact: "b@gmail.com",
      impression: 4
  },
  {
    userID: 1000,
    name: "名前2",
    gender: "男",
    age: 20,
    description: "こんにちは、名前3です。よろしくお願いします。",
    qualification: ["MOS","FE", "危険物取扱者"],
    skill: ["HTML", "CSS", "JavaScript"],
    tagList: ["Python", "Arduino"],
    contact: "b@gmail.com",
    impression: 4
},  {
  userID: 10000,
  name: "名前3",
  gender: "男",
  age: 20,
  description: "名前3",
  qualification: ["MOS","FE", "危険物取扱者"],
  skill: ["HTML", "CSS", "JavaScript"],
  tagList: ["Python", "Arduino"],
  contact: "b@gmail.com",
  impression: 4
},  {
  userID: 100000,
  name: "名前4",
  gender: "男",
  age: 20,
  description: "こんにちは、名前5です。よろしくお願いします。",
  qualification: ["MOS","FE", "危険物取扱者"],
  skill: ["HTML", "CSS", "JavaScript"],
  tagList: ["Python", "Arduino"],
  contact: "b@gmail.com",
  impression: 4
},
]

export class DataBase {
  public static find(userID:number):PortFolioProps{
      for(let i = 0; i < portFolioMock.length; i++) {
          if(portFolioMock[i].userID == userID) {
              return portFolioMock[i];
          }
      }
      return portFolioMock[0];
  }
}