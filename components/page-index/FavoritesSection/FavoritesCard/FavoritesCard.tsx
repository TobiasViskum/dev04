import Image from "next/image";
import styles from "./FavoritesCard.module.scss";
import { fitness, arrow } from "@/assets/images";
import { appImages } from "@/lib/util";

interface Props {
  appData: AppData;
}

export default function FavoritesCard(props: Props) {
  const appData = props.appData;
  const appImageData = appImages[appData.name_id];

  return (
    <div className={styles.container}>
      <div className={styles.iconHolder + " " + styles[appData.name_id]}>
        <Image src={appImageData.image} alt="icon" className={styles.icon} />
      </div>
      <h3>{appData.name}</h3>
      <div className={styles.arrowHolder}>
        <Image src={arrow} alt="icon" className={styles.arrow} />
      </div>
    </div>
  );
}
