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
    userID: 0,
    name: "高専 太郎",
    age: 20,
    gender: "男",
    description: "こんにちは",
    followQualifications:["Oracle Master","HTML", "CSS", "Oracle Master","HTML", "CSS"],
    followSkills: ["HTML", "CSS"],
    followTags: ["酒カス", "Pythonアンチ", "学校は家", "男女割合10:0","月3映画","サイズチェック","サイズチェック","サイズチェック","サイズチェック","サイズチェック","サイズチェック"],
    contacts: "a@gmail.com",
    impressions: 5
},
{
    userID: 2,
    name: "山田 花子",
    age: 22,
    gender: "女",
    description: "よろしくお願いします",
    followQualifications: ["Java", "JavaScript", "React"],
    followSkills: ["JavaScript", "React"],
    followTags: [
        "アウトドア派", "アニメ好き", "読書好き", "月1旅行", "映画マニア", "サイズチェック"
    ],
    contacts: "b@gmail.com",
    impressions: 3
},
{
    userID: 3,
    name: "鈴木 一郎",
    age: 25,
    gender: "男",
    description: "趣味はサッカーです",
    followQualifications: ["Python", "Django", "AWS"],
    followSkills: ["Python", "Django"],
    followTags: [
        "サッカー好き", "Pythonプロ", "アウトドア派", "月5映画", "技術オタク", "サイズチェック"
    ],
    contacts: "c@gmail.com",
    impressions: 7
},
{
    userID: 4,
    name: "佐藤 二郎",
    age: 28,
    gender: "男",
    description: "釣りが好きです",
    followQualifications: ["PHP", "Laravel", "MySQL"],
    followSkills: ["PHP", "MySQL"],
    followTags: [
        "釣り好き", "アウトドア派", "一人旅好き", "ラーメン好き", "月3映画", "サイズチェック"
    ],
    contacts: "d@gmail.com",
    impressions: 6
},
{
    userID: 5,
    name: "伊藤 三郎",
    age: 30,
    gender: "男",
    description: "旅行が趣味です",
    followQualifications: ["Go", "Kubernetes", "Docker"],
    followSkills: ["Go", "Docker"],
    followTags: [
        "旅行好き", "読書家", "アウトドア派", "技術マニア", "月2映画", "サイズチェック"
    ],
    contacts: "e@gmail.com",
    impressions: 8
},
{
    userID: 6,
    name: "田中 四郎",
    age: 27,
    gender: "男",
    description: "映画好きです",
    followQualifications: ["Ruby", "Rails", "JavaScript"],
    followSkills: ["Ruby", "Rails"],
    followTags: [
        "映画好き", "アニメファン", "コーヒー好き", "月3映画", "読書家", "サイズチェック"
    ],
    contacts: "f@gmail.com",
    impressions: 4
},
{
    userID: 7,
    name: "渡辺 五郎",
    age: 24,
    gender: "男",
    description: "読書が趣味です",
    followQualifications: ["SQL", "Azure", "Node.js"],
    followSkills: ["SQL", "Node.js"],
    followTags: [
        "読書家", "映画ファン", "猫好き", "インドア派", "月1映画", "サイズチェック"
    ],
    contacts: "g@gmail.com",
    impressions: 3
},
{
    userID: 8,
    name: "木村 六郎",
    age: 26,
    gender: "男",
    description: "アウトドア好きです",
    followQualifications: ["HTML", "CSS", "JavaScript"],
    followSkills: ["HTML", "CSS"],
    followTags: [
        "アウトドア派", "映画好き", "技術者", "男女割合9:1", "月3映画", "サイズチェック"
    ],
    contacts: "h@gmail.com",
    impressions: 9
},
{
    userID: 9,
    name: "小林 七子",
    age: 23,
    gender: "女",
    description: "アニメ好きです",
    followQualifications: ["React", "Vue", "Angular"],
    followSkills: ["React", "Vue"],
    followTags: [
        "アニメファン", "漫画好き", "インドア派", "読書家", "月4映画", "サイズチェック"
    ],
    contacts: "i@gmail.com",
    impressions: 2
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