import styles from "./FavoritesSection.module.scss";

interface Props {
  profileData: ProfileData;
}

export default function FavoritesSections(props: Props) {
  const profileData = props.profileData;

  return (
    <div>
      <h2>Favorites</h2>
      <p>You dont have any favorites yet!</p>
    </div>
  );
}
