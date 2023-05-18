import styles from "./TabsSection.module.scss";

interface Props {
  profileData: ProfileData;
}

export default function TabsSection(props: Props) {
  return (
    <div>
      <h2>Tabs</h2>
      <p>Here is all tabs going to be displayed!</p>
    </div>
  );
}
