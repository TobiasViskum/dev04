import Image from "next/image";
import styles from "./TabsCard.module.scss";
import { arrow } from "@/assets/images";
import { appImages } from "@/lib/util";

interface Props {
  appData: AppData;
}

export default function TabsCard(props: Props) {
  const appData = props.appData;
  const appImageData = appImages[appData.name_id];

  return (
    <div className={styles.container}>
      <div className={styles.iconHolder + " " + appData.name_id}>
        <Image
          src={appImageData.image}
          alt="icon"
          style={{ height: `${appImageData.size}%`, width: `${appImageData.size}%` }}
        />
      </div>
      <div className={styles.textHolder}>
        <h3>{appData.name}</h3>
        <p>{appData.category}</p>
      </div>
      <div className={styles.arrowHolder}>
        <Image src={arrow} alt="icon" className={styles.arrow} />
      </div>
    </div>
  );
}
