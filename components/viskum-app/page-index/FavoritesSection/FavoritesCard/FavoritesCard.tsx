import Image from "next/image";
import styles from "./FavoritesCard.module.scss";
import { arrow, star_full } from "@/assets/images";
import { appImages } from "@/lib/util";
import Link from "next/link";
import { updateFavorite } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface Props {
  appData: AppData;
  profileData: ProfileData;
}

export default function FavoritesCard(props: Props) {
  const profileData = props.profileData;
  const appData = props.appData;
  const uid = profileData.uid;
  const favorites: any = profileData.favorites;
  const name_id = appData.name_id;
  const appImageData = appImages[appData.name_id];

  async function handleFavoriteClick() {
    "use server";
    await updateFavorite(uid, false, name_id, favorites);
    revalidatePath("/");
    return;
  }

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
        <form action={handleFavoriteClick}>
          <button type="submit" className={styles.favoriteIconHolder}>
            <Image src={star_full} alt="icon" className={styles.favoriteIcon} />
          </button>
        </form>
        <Link className={styles.arrowHolder} href={`/${uid}/${appData.name_id}`}>
          <Image src={arrow} alt="icon" className={styles.arrow} />
        </Link>
      </div>
    </div>
  );
}
