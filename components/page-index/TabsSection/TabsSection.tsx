import styles from "./TabsSection.module.scss";

interface Props {
  profileData: ProfileData;
  appData: AppData[];
}

export default function TabsSection(props: Props) {
  return (
    <div className={styles.main}>
      <h2>Tabs</h2>
      <p>Here is all tabs going to be displayed!</p>
    </div>
  );
}
