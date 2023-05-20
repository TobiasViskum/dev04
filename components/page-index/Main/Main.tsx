import styles from "./Main.module.scss";
import { SearchSection, FavoritesSections, TabsSection } from "..";

interface Props {
  profileData: string;
  appData: string;
}

export default function Main(props: Props) {
  const profileData: ProfileData = JSON.parse(props.profileData);
  const appData: AppData[] = JSON.parse(props.appData);

  return (
    <main className={styles.main} id="main">
      <SearchSection profileData={profileData} />
      <FavoritesSections profileData={profileData} appData={appData} />
      <TabsSection profileData={profileData} appData={appData} />
    </main>
  );
}
