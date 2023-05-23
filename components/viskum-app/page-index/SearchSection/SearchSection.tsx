import styles from "./SearchSection.module.scss";
import Image from "next/image";
import { profileTobias } from "@/assets/images";
import SearchBar from "./SearchBar/SearchBar";
import Header from "./Header";

interface Props {
  profileData: string;
}

export default function SearchSection(props: Props) {
  const profileData: ProfileData = JSON.parse(props.profileData);

  return (
    <div className={styles.searchSection} id="searchSection">
      <div className={styles.upperRow}>
        <div className={styles.profileHolder} id="profileIcon">
          <Image src={profileTobias} alt="profile" className={styles.profileIcon} />
        </div>
        <Header profileData={profileData} />
      </div>
      <div className={styles.lowerRow}>
        <SearchBar />
      </div>
    </div>
  );
}
