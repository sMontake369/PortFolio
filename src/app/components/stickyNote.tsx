import {DataBase,PortFolioProps} from "./mock/mock"
import styles from "./stickyNote.module.css";
import Avatar from "boring-avatars";
import Star from "./star.svg";
import Glass from "./glass.svg";

export const StickyNote = ({ params }: { params: { userID: number } }) => {
  const portFolio: PortFolioProps = DataBase.find(params.userID);
  return (
		<div className={styles.stickyNote}>
			<div className={styles.iconAndStatus}>
				<p className={styles.icon}>
					<Avatar
						size={"150"}
						name={portFolio.userID.toString()}
						variant="beam"
						colors={generateColors(portFolio.userID)}
					/>
				</p>
				<p className={styles.followAndImpression}>
					<Star />
					&nbsp;00 &emsp;
					<Glass />
					&nbsp;00{" "}
				</p>
			</div>
			<div className={styles.userInfoList}>
				<div className={styles.userInfo}>
					<h1>
						{portFolio.name}({portFolio.age})
					</h1>
				</div>
				<div className={styles.tagList}>
					{portFolio.tagList.map((tag) => (
						<div className={styles.tag} key={tag}>
							<p>#{tag}</p>
						</div>
					))}
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
