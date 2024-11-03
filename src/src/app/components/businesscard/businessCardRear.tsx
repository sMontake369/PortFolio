
import { Contact, type FolioProps } from "../mock/mock"
import styles from "./businessCardRear.module.css";

export const BusinessCardRear = ({ params }: { params: { folio: FolioProps } }) => {
  // const portFolio: FolioProps = findUserByID(params.folio.);
  return (
		<div className={styles.businessCardRear}>
      <h3>自己紹介</h3>
      <div className={styles.description}>
        <p>{params.folio.description}</p>
      </div>
      <div className={styles.information}>
        <div className={styles.impression}>
          <p>総閲覧数 : {params.folio.impression}</p>
        </div>
        {params.folio.contacts !== undefined && (
        <div className={styles.contacts}>
          <p>連絡先</p>
          {params.folio.contacts.map((contact, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation> これだけ許して
            <p key={index}>
              {contact.method}:{contact.contact}
            </p>
          ))}
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
    hash |= 0; // Convert to 32bit integer
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
    hash = hash + i; // Modify hash for next color generation
  }

  return colors;
}
