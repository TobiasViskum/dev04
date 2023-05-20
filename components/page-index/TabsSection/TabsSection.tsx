import styles from "./TabsSection.module.scss";
import TabsCard from "./TabsCard/TabsCard";

function findTabs(appData: AppData[]) {
  return appData.map((app, index) => {
    return <TabsCard key={index} appData={app} />;
  });
}

interface Props {
  profileData: ProfileData;
  appData: AppData[];
}

export default function TabsSection(props: Props) {
  const appData = props.appData;

  const result = findTabs(appData);

  return (
    <div className={styles.main}>
      <h2>Tabs</h2>
      <div className={styles.cardHolder}>{result}</div>
    </div>
  );
}
