import {portFolioMock} from "../page"
import "./module.css"
import NavBar from "../_components/header";
import Avatar from "boring-avatars";

export default function portFolio()
{
    return (
        <NavBar>
            <h1 className="name">ポートフォリオ一覧</h1>
            <div className="portFolioList">
                {portFolioMock.map((portFolio) => (
                    <div className="container" key={portFolio.userID}>
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
        </NavBar>
    );
}

function hashCode(value: number): number {
    let str = value.toString();
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function intToRGB(i: number): string {
    const c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}

export function generateColors(seed: number, count: number = 5): string[] {
    const colors: string[] = [];
    let hash = hashCode(seed);
    
    for (let i = 0; i < count; i++) {
        const color = intToRGB(hash);
        colors.push(`#${color}`);
        hash = hashCode(hash + i); // Modify hash for next color generation
    }

    return colors;
}