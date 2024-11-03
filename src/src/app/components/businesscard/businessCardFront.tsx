import type { FolioProps } from "../mock/mock"
import styles from "./businessCardFront.module.css";
import Avatar from "boring-avatars";
import { RadarChart } from "../radarChart";

export const BusinessCard = ({ params }: { params: { folio: FolioProps } }) => {
  return (
		<div className={styles.businessCard}>
			<p className={styles.icon}>
				<Avatar
					size={"140%"}
					name={params.folio.userID}
					variant="beam"
					colors={generateColors(params.folio.userID ? params.folio.userID : "")}
        />
			</p>
			<div className={styles.information}>
				<div className={styles.userInfo}>
          <div className={`${params.folio.gender ? styles[params.folio.gender] : styles.その他}`}>
						{params.folio.name}({params.folio.age})
					</div>
          {params.folio.personnelType !== undefined && (
            <div className={styles.personnelType}>
              <p>{params.folio.personnelType}</p>
            </div>
          )}
          {params.folio.tags !== undefined && (
            <div className={styles.tagList}>
              {params.folio.tags.map((tag, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation> これだけ許して
                <div className={styles.tag} key={index}>
                  <p>#{tag}</p>
                </div>
              ))}
            </div>
          )}
					<div className={styles.qualificationList}>
            <p>資格</p>
            {params.folio.qualifications !== undefined && (
              <ul>
                {params.folio.qualifications.map((qualification, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation> これだけ許して
                  <li className={styles.qualification} key={index}>
                    {qualification}
                  </li>
                ))}
              </ul>
            )}
					</div>
				</div>
        {params.folio.qualificationReviews !== undefined && (
				<div className={styles.radarChart}>
          <RadarChart params={{ data: params.folio?.qualificationReviews || [] }} />
				</div>
        )}
        {params.folio.qualifications !== undefined && params.folio.qualificationReviews === undefined && (
        <div className={styles.noRadarChart}>
          <p>資格チャート生成中</p>
        </div>
        )}
        {params.folio.qualifications === undefined && params.folio.qualificationReviews === undefined && (
        <div className={styles.noQualification}>
          <p>資格情報なし</p>
        </div>
        )}
			</div>
		</div>
  );
};

function hashCode(value: string): number {
  const str = value.toString();
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}

function intToRGB(i: number): string {
  const c = (i & 0x00ffffff).toString(16).toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}

export function generateColors(seed: string, count = 5): string[] {
  const colors: string[] = [];
  let hash = hashCode(seed);

  for (let i = 0; i < count; i++) {
    const color = intToRGB(hash);
    colors.push(`#${color}`);
    hash = hash + i;
  }
  return colors;
}
