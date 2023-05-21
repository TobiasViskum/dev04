import Image from "next/image";
import styles from "./FavoritesCard.module.scss";
import { arrow, star_full } from "@/assets/images";
import { appImages } from "@/lib/viskum-app/util";

interface Props {
  appData: AppData;
}

export default function FavoritesCard(props: Props) {
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
      <h3>{appData.name}</h3>
      <div className={styles.rightIcons}>
        <form>
          <button className={styles.favoriteIconHolder}>
            <Image src={star_full} alt="icon" className={styles.favoriteIcon} />
          </button>
        </form>
        <form>
          <button className={styles.arrowHolder}>
            <Image src={arrow} alt="icon" className={styles.arrow} />
          </button>
        </form>
      </div>
    </div>
  );
}