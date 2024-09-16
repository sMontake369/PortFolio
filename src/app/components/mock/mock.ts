export interface FolioProps {
    userID: number;
    name: string;
    age: number;
    gender: string;
    description: string;
    followQualifications: string[];
    followSkills: string[];
    followTags: string[];
    contacts: string;
    impressions: number;
  }
  
  
export const folioMock: FolioProps[] = [
{
    userID: 321,
    name: "あいうえお かきくけこ さしすせそ たちつてと なにぬねの はひふへほ まみむめも やゆよ らりるれろ わをん",
    age: 20,
    gender: "男",
    description: "高専での学びを通して、実践的なスキルと理論的な知識をバランスよく身につけました。<script>alert(XSS!)</script>特に、プロジェクトベースの学習では、チームでの協働や問題解決能力が鍛えられました。Pythonを用いたデータ解析や、Arduinoを使ったロボット製作など、実際の課題に取り組む中で、理論を実践に生かす力を養いました。今後は、これらの経験を基に、さらに専門的な技術を深め、社会に貢献できるエンジニアを目指していきたいと思います。",
    followQualifications:["Oracle Master","HTML", "CSS", "Oracle Master","HTML", "CSS"],
    followSkills: ["HTML", "CSS"],
    followTags: ["酒カス", "Pythonアンチ", "学校は家", "男女割合10:0","月3映画","サイズチェック","サイズチェック","サイズチェック","サイズチェック","サイズチェック","サイズチェック"],
    contacts: "a@gmail.com",
    impressions: 5
},
{
    userID: 100,
    name: "名前1",
    gender: "男",
    age: 20,
    description: "こんにちは、名前2です。よろしくお願いします。",
    followQualifications: ["MOS","FE", "危険物取扱者"],
    followSkills: ["HTML", "CSS", "JavaScript"],
    followTags: ["Python", "Arduino"],
    contacts: "b@gmail.com",
    impressions: 4
},
{
    userID: 1000,
    name: "名前2",
    gender: "男",
    age: 20,
    description: "こんにちは、名前3です。よろしくお願いします。",
    followQualifications: ["MOS","FE", "危険物取扱者"],
    followSkills: ["HTML", "CSS", "JavaScript"],
    followTags: ["Python", "Arduino"],
    contacts: "b@gmail.com",
    impressions: 4
},  
{
    userID: 10000,
    name: "名前3",
    gender: "男",
    age: 20,
    description: "名前3",
    followQualifications: ["MOS","FE", "危険物取扱者"],
    followSkills: ["HTML", "CSS", "JavaScript"],
    followTags: ["Python", "Arduino"],
    contacts: "b@gmail.com",
    impressions: 4
}, 
{
    userID: 100000,
    name: "名前4",
    gender: "男",
    age: 20,
    description: "こんにちは、名前5です。よろしくお願いします。",
    followQualifications: ["MOS","FE", "危険物取扱者"],
    followSkills: ["HTML", "CSS", "JavaScript"],
    followTags: ["Python", "Arduino"],
    contacts: "b@gmail.com",
    impressions: 4
},
]

export class DataBase {
    public static find(userID:number):FolioProps{
        for(let i = 0; i < folioMock.length; i++) {
            if(folioMock[i].userID == userID) {
                return folioMock[i];
            }
        }
        return folioMock[0];
    }
}