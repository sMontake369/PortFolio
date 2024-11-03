export interface FolioProps {
  userID?: string;
  name?: string;
  age?: number;
  gender?: string;
  description?: string;
  qualifications?: string[];
  skills?: string[];
  tags?: string[];
  personnelType?: string;
  contacts?: Contact[];
  qualificationReviews?: qualificationReviews[];
  impression?: number;
}

export interface Contact {
  id ?: string;
  method: string;
  contact: string;
}

export interface qualificationReviews {
  qualificationName: string;
  skillReviews: skillReviews[];
}

export interface skillReviews {
  skillName: string;
  rating: number;
}

export const folioMock: FolioProps[] = [
  {
    userID: "1",
    name: "佐藤 花子",
    age: 25,
    gender: "女",
    description: "プログラミング好きです。",
    qualifications: ["AWS Certified Solutions Architect", "Java Programmer"],
    skills: ["JavaScript", "React", "Node.js"],
    tags: ["フルスタック", "アプリ開発", "チームワーク"],
    contacts: [
      { id: "1", method: "email", contact: "hanako@example.com" },
      { id: "2", method: "電話", contact: "080-1234-5678" },
    ],
    qualificationReviews: [
      {
        qualificationName: "AWS Certified Solutions Architect",
        skillReviews: [
          { skillName: "データ・AI活用業務の設計・事業実装・評価", rating: 5 },
          { skillName: "クラウドインフラ活用", rating: 4 }
        ]
      },
      {
        qualificationName: "Java Programmer",
        skillReviews: [
          { skillName: "ソフトウェア設計手法", rating: 4 },
          { skillName: "フロントエンドシステム開発", rating: 3 }
        ]
      }
    ],
    impression: 4
  },
  {
    userID: "2",
    name: "鈴木 一郎",
    age: 30,
    gender: "男",
    description: "デザインを専門としています。",
    qualifications: ["Adobe Certified Expert", "UI/UX Designer"],
    skills: ["Photoshop", "Illustrator", "Figma"],
    tags: ["デザイン", "クリエイティブ", "インターフェース"],
    contacts: [
      { id: "3", method: "email", contact: "ichiro@example.com" },
      { id: "4", method: "Slack", contact: "@ichiro" },
    ],
    qualificationReviews: [
      {
        qualificationName: "Adobe Certified Expert",
        skillReviews: [
          { skillName: "セキュア設計・開発・構築", rating: 5 },
          { skillName: "リーダーシップ", rating: 4 }
        ]
      }
    ],
    impression: 5
  },
  {
    userID: "3",
    name: "山田 太郎",
    age: 28,
    gender: "男",
    description: "データ分析が得意です。",
    qualifications: ["Google Data Analytics", "SQL Fundamentals"],
    skills: ["Excel", "Python", "R"],
    tags: ["データ分析", "ビジネスインサイト"],
    contacts: [
      { id: "5", method: "email", contact: "taro@example.com" },
      { id: "6", method: "LinkedIn", contact: "linkedin.com/in/taro" },
    ],
    qualificationReviews: [
      {
        qualificationName: "Google Data Analytics",
        skillReviews: [
          { skillName: "データ理解・活用", rating: 1000 },
          { skillName: "数理統計・多変量解析・データ可視化", rating: 500 }
        ]
      }
    ],
    impression: 3
  },
  {
    userID: "4",
    name: "田中 美咲",
    age: 22,
    gender: "女",
    description: "AI開発に興味があります。",
    qualifications: ["TensorFlow Developer", "Machine Learning"],
    skills: ["Python", "TensorFlow", "Pandas"],
    tags: ["AI", "機械学習", "データサイエンス"],
    contacts: [
      { id: "7", method: "email", contact: "misaki@example.com" },
      { id: "8", method: "GitHub", contact: "github.com/misaki" },
    ],
    qualificationReviews: [
      {
        qualificationName: "TensorFlow Developer",
        skillReviews: [
          { skillName: "機械学習・深層学習", rating: 5 },
          { skillName: "データ活用基盤設計", rating: 4 }
        ]
      }
    ],
    impression: 4
  },
  {
    userID: "5",
    name: "中村 健",
    age: 27,
    gender: "男",
    description: "IT業界での経験があります。",
    qualifications: ["CCNA", "CompTIA Security+"],
    skills: ["ネットワーク管理", "セキュリティ"],
    tags: ["IT", "ネットワーク", "セキュリティ"],
    contacts: [
      { id: "9", method: "email", contact: "ken@example.com" },
      { id: "10", method: "電話", contact: "090-8765-4321" },
    ],
    qualificationReviews: [
      {
        qualificationName: "CCNA",
        skillReviews: [
          { skillName: "セキュリティマネジメント", rating: 5 },
          { skillName: "インシデント対応と事業継続", rating: 4 }
        ]
      }
    ],
    impression: 5
  },
  {
      userID: "2",
      name: "山田 花子",
      age: 22,
      gender: "女",
      description: "よろしくお願いします",
      skills: ["JavaScript", "React"],
      tags: [
          "アウトドア派", "アニメ好き", "読書好き", "月1旅行", "映画マニア", "サイズチェック"
      ],
      contacts: [{ method: "email", contact: "b@gmail.com" }],
      impression: 3
  },
  {
      userID: "3",
      name: "鈴木 一郎",
      age: 25,
      gender: "男",
      description: "趣味はサッカーです",
      qualifications: ["Python", "Django", "AWS"],
      skills: ["Python", "Django"],
      tags: [
          "サッカー好き", "Pythonプロ", "アウトドア派", "月5映画", "技術オタク", "サイズチェック"
      ],
      contacts: [{ method: "email", contact: "c@gmail.com" }],
      impression: 7
  },
  {
      userID: "6",
      name: "田中 四郎",
      age: 27,
      gender: "男",
      description: "映画好きです",
      qualifications: ["Ruby", "Rails", "JavaScript"],
      skills: ["Ruby", "Rails"],
      tags: [
          "映画好き", "アニメファン", "コーヒー好き", "月3映画", "読書家", "サイズチェック"
      ],
      contacts: [{ method: "email", contact: "f@gmail.com" }],
      impression: 4
  },
  {
      userID: "7",
      name: "渡辺 五郎",
      age: 24,
      gender: "男",
      description: "読書が趣味です",
      tags: [
          "読書家", "映画ファン", "猫好き", "インドア派", "月1映画", "サイズチェック"
      ],
      contacts: [{ method: "email", contact: "g@gmail.com" }],
      impression: 3
  },
  {
      userID: "8",
      name: "木村 六郎",
      age: 26,
      gender: "男",
      description: "アウトドア好きです",
      skills: ["HTML", "CSS"],
      tags: [
          "アウトドア派", "映画好き", "技術者", "男女割合9:1", "月3映画", "サイズチェック"
      ],
      contacts: [{ method: "email", contact: "h@gmail.com" }],
      impression: 9
  },
  {
      userID: "9",
      name: "小林 七子",
      age: 23,
      gender: "女",
      description: "アニメ好きです",
      qualifications: ["React", "Vue", "Angular"],
      skills: ["React", "Vue"],
      tags: [
          "アニメファン", "漫画好き", "インドア派", "読書家", "月4映画", "サイズチェック"
      ],
      contacts: [{ method: "email", contact: "i@gmail.com" }],
      impression: 2
  },
  {
      userID: "100",
      name: "名前1",
      gender: "男",
      age: 20,
      description: "こんにちは、名前2です。よろしくお願いします。",
      skills: ["HTML", "CSS", "JavaScript"],
      tags: ["Python", "Arduino"],
      contacts: [{ method: "email", contact: "b@gmail.com" }],
      impression: 4
  },
  {
      userID: "1000",
      name: "名前2",
      gender: "男",
      age: 20,
      description: "こんにちは、名前3です。よろしくお願いします。",
      skills: ["HTML", "CSS", "JavaScript"],
      tags: ["Python", "Arduino"],
      contacts: [{ method: "email", contact: "b@gmail.com" }],
      impression: 4
  },  
  {
      userID: "10000",
      name: "名前3",
      gender: "男",
      age: 20,
      description: "名前3",
      skills: ["HTML", "CSS", "JavaScript"],
      tags: ["Python", "Arduino"],
      contacts: [{ method: "email", contact: "b@gmail.com" }],
      impression: 4
  }, 
  {
      userID: "100000",
      name: "名前4",
      gender: "男",
      age: 20,
      description: "こんにちは、名前5です。よろしくお願いします。",
      skills: ["HTML", "CSS", "JavaScript"],
      tags: ["Python", "Arduino"],
      contacts: [{ method: "email", contact: "b@gmail.com" }],
      impression: 4
  },
]

export function findUserByID(userID: string): FolioProps {
  for (let i = 0; i < folioMock.length; i++) {
      if (folioMock[i].userID === userID) {
          return folioMock[i];
      }
  }
  return folioMock[0];
}
