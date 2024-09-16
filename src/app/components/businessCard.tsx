
import {DataBase,FolioProps} from "./mock/mock"
import styles from "./businessCard.module.css";
import Avatar from "boring-avatars";
import RadarChart from "./radarChart";

export const BusinessCard = ({ params }: { params: { userID: number } }) => {
  const portFolio: FolioProps = DataBase.find(params.userID);
  return (
		<div className={styles.businessCard}>
			<p className={styles.icon}>
				<Avatar
					size={"140%"}
					name={portFolio.userID.toString()}
					variant="beam"
					colors={generateColors(portFolio.userID)}/>
			</p>
			<div className={styles.information}>
				<div className={styles.userInfo}>
					<div className={styles.user}>
						{portFolio.name}({portFolio.age})
					</div>
					<div className={styles.tagList}>
						{portFolio.followTags.map((tag) => (
							<div className={styles.tag} key={tag}>
								<p>#{tag}</p>
							</div>
						))}
					</div>
					<div className={styles.qualificationList}>
						<p>資格</p>
						{portFolio.followQualifications.map((qualification) => (
							<div className={styles.qualification} key={qualification}>
								{qualification}
							</div>
						))}
					</div>
				</div>
				<div className={styles.radarChart}>
					<RadarChart></RadarChart>
				</div>
			</div>
		</div>
  );
};

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
  const c = (i & 0x00ffffff).toString(16).toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}

function generateColors(seed: number, count: number = 5): string[] {
  const colors: string[] = [];
  let hash = hashCode(seed);

  for (let i = 0; i < count; i++) {
    const color = intToRGB(hash);
    colors.push(`#${color}`);
    hash = hashCode(hash + i); // Modify hash for next color generation
  }

  return colors;
}

//お気に入り数と閲覧数を表示する場合
{/* <p className={styles.followAndImpression}>
<Star />
&nbsp;00 &emsp;
<Glass />
&nbsp;00{" "}
</p> */}