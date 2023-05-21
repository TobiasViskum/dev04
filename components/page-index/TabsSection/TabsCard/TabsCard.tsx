import Image from "next/image";
import styles from "./TabsCard.module.scss";
import { arrow, star_full, star_outline } from "@/assets/images";
import { appImages } from "@/lib/util";
import { updateFavorite } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface Props {
  appData: AppData;
  profileData: ProfileData;
}

export default function TabsCard(props: Props) {
  const profileData = props.profileData;
  const appData = props.appData;
  const uid = profileData.uid;
  const favorites: any = profileData.favorites;
  const isFavorite: string | undefined = favorites[appData.name_id];
  const name_id = appData.name_id;
  const appImageData = appImages[appData.name_id];

  async function handleFavoriteClick() {
    "use server";
    const newState = isFavorite ? false : true;
    await updateFavorite(uid, newState, name_id, favorites);
    revalidatePath("/");
    return;
  }
  async function handleArrowClick() {
    "use server";
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
        <form action={handleArrowClick}>
          <button type="submit" className={styles.arrowHolder}>
            <Image src={arrow} alt="icon" className={styles.arrow} />
          </button>
        </form>
      </div>
    </div>
  );
}
