import styles from "./FavoritesSection.module.scss";
import FavoritesCard from "./FavoritesCard/FavoritesCard";
import { updateFavorite } from "@/lib/db";

function findFavorites(appData: AppData[], profileData: ProfileData) {
  const uid = profileData.uid;

  let hasFoundFavorite = false;
  if (profileData.favorites == null) {
    updateFavorite(uid, false, {}, profileData.favorites);
    return;
  } else {
    return appData.map((app, index) => {
      if (profileData.favorites && profileData.favorites[app.name_id] != undefined) {
        hasFoundFavorite = true;
        return <FavoritesCard key={index} appData={app} profileData={profileData} />;
      }
      if (appData.length == index + 1 && hasFoundFavorite == false) {
        return (
          <p key={index} className={styles.noFavoritesFoundParagraph}>
            You don{"'"}t have any favorites yet!
          </p>
        );
      }
    });
  }
}

interface Props {
  profileData: string;
  appData: string;
}

export default function FavoritesSection(props: Props) {
  const profileData: ProfileData = JSON.parse(props.profileData);
  const appData: AppData[] = JSON.parse(props.appData);

  const result = findFavorites(appData, profileData);

  return (
    <div className={styles.main}>
      <h2>Favorites</h2>
      <div className={styles.cardHolder}>{result}</div>
    </div>
  );
}
