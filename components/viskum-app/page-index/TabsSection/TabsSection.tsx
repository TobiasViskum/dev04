import styles from "./TabsSection.module.scss";
import TabsCard from "./TabsCard/TabsCard";
import Link from "next/link";

function findTabs(appData: AppData[], profileData: ProfileData) {
  return appData.map((app, index) => {
    return <TabsCard key={index} appData={app} profileData={profileData} />;
  });
}

interface Props {
  profileData: ProfileData;
  appData: AppData[];
}

export default function TabsSection(props: Props) {
  const appData = props.appData;
  const profileData = props.profileData;

  const result = findTabs(appData, profileData);

  return (
    <div className={styles.main}>
      <h2>Tabs</h2>
      <div className={styles.cardHolder}>{result}</div>
    </div>
  );
}
