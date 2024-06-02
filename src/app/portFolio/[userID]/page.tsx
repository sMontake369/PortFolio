import {DataBase,PortFolioProps} from "../../page"
import "./module.css"
import NavBar from "../../_components/header";
import Avatar from "boring-avatars";
import { generateColors } from "../page";

const PortFolio = ({ params }: { params: { userID: number } }) => {
  const portFolio:PortFolioProps = DataBase.find(params.userID);
  return (
    <NavBar>
      <div className="portFolioList">
        <div className="container">
          <div className="info">
            <div className="profile">
              <h1>
                {portFolio.name} 
                <Avatar
                  size={60}
                  name={portFolio.userID.toString()}
                  variant="beam"
                  colors={generateColors(portFolio.userID)} />
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
              <p>{portFolio.contact}</p>
          </div>
        </div>
      </div>
      <div className="border"> </div>
      <div className="description">
        {portFolio.description}
      </div>
    </NavBar>
  )
};

export default PortFolio;