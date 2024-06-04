import {DataBase,PortFolioProps} from "../../page"
import "./module.css"
import NavBar from "../../_components/header";
import Avatar from "boring-avatars";
import { generateColors } from "../page";
import Star from "../../_components/star.svg"
import Glass from "../../_components/glass.svg"

const PortFolio = ({ params }: { params: { userID: number } }) => {
  const portFolio:PortFolioProps = DataBase.find(params.userID);
  return (
    <NavBar>
      <div className="stickyNote">
        <div className="iconAndStatus">
          <p className="icon"><Avatar size={"150"} name={portFolio.userID.toString()} variant="beam" colors={generateColors(portFolio.userID)}/></p>
          <p className="followAndImpression"><Star/>&nbsp;00 &emsp;<Glass/>&nbsp;00 </p>
        </div>
          <div className="userInfoList">
            <div className="userInfo">
              <h1>{portFolio.name}({portFolio.age})</h1>
            </div>
            <div className="tagList">
              {portFolio.tagList.map((tag) => (
                <div className="tag" key={tag}>
                  <p>#{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      <div className="note">
        <h1>ノート</h1>
        <div className="description">
          {portFolio.description}
        </div>
      </div>
    </NavBar>
  )
};

export default PortFolio;