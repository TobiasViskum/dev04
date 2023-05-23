import Image from "next/image";
import styles from "./TabsCard.module.scss";
import { arrow, star_full, star_outline } from "@/assets/images";
import { appImages } from "@/lib/util";
import { updateFavorite } from "@/lib/db";
import { revalidatePath } from "next/cache";
import Link from "next/link";

interface Props {
  appData: AppData;
  profileData: ProfileData;
}

export default function TabsCard(props: Props) {
  const profileData = props.profileData;
  const appData = props.appData;
  const uid = profileData.uid;
  const favorites = profileData.favorites;

  const isFavorite = favorites == null ? false : favorites[appData.name_id] ? true : false;
  const name_id = appData.name_id;
  const appImageData = appImages[appData.name_id];

  async function handleFavoriteClick() {
    "use server";
    const newState = !isFavorite;
    await updateFavorite(uid, newState, name_id, favorites);
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
      <div className={styles.textHolder}>
        <h3>{appData.name}</h3>
        <p>{appData.category}</p>
      </div>
      <div className={styles.rightIcons}>
        <form action={handleFavoriteClick}>
          <button type="submit" className={styles.favoriteIconHolder}>
            <Image
              src={isFavorite ? star_full : star_outline}
              alt="icon"
              className={styles.favoriteIcon}
            />
          </button>
        </form>
        <Link className={styles.arrowHolder} href={`/${uid}/${appData.name_id}`}>
          <Image src={arrow} alt="icon" className={styles.arrow} />
        </Link>
      </div>
    </div>
  );
}
