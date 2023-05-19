import styles from "./FavoritesSection.module.scss";
import FavoritesCard from "./FavoritesCard/FavoritesCard";

interface Props {
  profileData: ProfileData;
  appData: AppData[];
}

function findFavorites(appData: AppData[], favorites: { [key: string]: string }) {
  let hasFoundFavorite = false;
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

export default function FavoritesSections(props: Props) {
  const profileData = props.profileData;
  const appData = props.appData;
  const favorites: { [key: string]: string } = JSON.parse(profileData.favorites);

  const result = findFavorites(appData, favorites);

  return (
    <div className={styles.main}>
      <h2>Favorites</h2>
      <div className={styles.cardHolder}>{result}</div>
    </div>
  );
}
