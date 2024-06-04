import NavBar from "./_components/header";
import "./module.css";
import Avatar from "boring-avatars";
import { generateColors } from "./portFolio/page";

function Home() {
  return (
    <div className="backGround">
      <NavBar>
        <h1> Web Site Title</h1>
        <h3>自分のラーニングポートフォリオが作れるサイト</h3>
        <div className="loop">
          <div className="box">
            {portFolioMock.map((portFolio) => (
              <div className="homeContainer" key={portFolio.userID}>
                <a href={`/portFolio/${portFolio.userID}`}>
                  <div className="info">
                    <div className="profile">
                      <h1>
                        {portFolio.name}
                        <Avatar
                          size={60}
                          name={portFolio.userID.toString()}
                          variant="beam"
                          colors={generateColors(portFolio.userID)}/>
                      </h1>
                        <h3>姓:{portFolio.gender}&emsp;年齢:{portFolio.age}</h3>
                    </div>
                    <p>資格</p>
                    {portFolio.qualification.map((qualification) => (
                      <div className="qualification" key={qualification}>
                        <p>{qualification}</p>
                      </div>
                    ))}
                    <p>スキル</p>
                    {portFolio.skill.map((skill) => (
                      <div className="qualification" key={skill}>
                        <p>{skill}</p>
                      </div>
                    ))}
                  </div>
                  <div className="contact">
                      {portFolio.contact}
                  </div>
                </a>
              </div>
            ))}
          </div>
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
  contact: string;
  impression: number;
}


export const portFolioMock: PortFolioProps[] = [
  {
      userID: 1,
      name: "田中太郎",
      age: 25,
      gender: "男",
      description: "初めまして、田中太郎です。よろしくお願いします。",
      qualification:["Oracle Master","HTML", "CSS"],
      skill: ["HTML", "CSS"],
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