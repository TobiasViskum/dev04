import Image from "next/image";
import styles from "./FavoritesCard.module.scss";
import { dumbbell, arrow } from "@/assets/images";

interface Props {
  appData: AppData;
}

export default function FavoritesCard(props: Props) {
  const appData = props.appData;

  return (
    <div className={styles.container}>
      <div className={styles.iconHolder}>
        <Image src={dumbbell} alt="icon" className={styles.icon} />
      </div>
      <h3>{appData.name}</h3>
      <div className={styles.arrowHolder}>
        <Image src={arrow} alt="icon" className={styles.arrow} />
      </div>
    </div>
  );
}
