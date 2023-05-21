import styles from "./FavoritesSection.module.scss";
import FavoritesCard from "./FavoritesCard/FavoritesCard";
import { updateFavorite } from "@/lib/viskum-app/db-calls";

function findFavorites(
  uid: string,
  appData: AppData[],
  favorites: { [key: string]: string } | null
) {
  let hasFoundFavorite = false;
  if (favorites == null) {
    updateFavorite(uid, false, {}, favorites);
    return;
  }

  return appData.map((app, index) => {
    if (favorites[app.name_id] != undefined) {
      hasFoundFavorite = true;
      return <FavoritesCard key={index} appData={app} />;
    }
    if (appData.length == index + 1 && hasFoundFavorite == false) {
      return (
        <p key={index} className={styles.noFavoritesFoundParagraph}>
          You dont have any favorites yet!
        </p>
      );
    }
  });
}

interface Props {
  profileData: ProfileData;
  appData: AppData[];
}

export default function FavoritesSections(props: Props) {
  const profileData = props.profileData;
  const appData = props.appData;

  const result = findFavorites(profileData.uid, appData, profileData.favorites);

  return (
    <div className={styles.main}>
      <h2>Favorites</h2>
      <div className={styles.cardHolder}>{result}</div>
    </div>
  );
}
