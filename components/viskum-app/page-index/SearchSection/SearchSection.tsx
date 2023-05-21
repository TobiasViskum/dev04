import styles from "./SearchSection.module.scss";
import Image from "next/image";
import { profileTobias } from "@/assets/images";
import { translator } from "@/lib/viskum-app/util";
import SearchBar from "./SearchBar/SearchBar";

interface Props {
  profileData: ProfileData;
}

export default function SearchSection(props: Props) {
  const profileData = props.profileData;

  return (
    <div className={styles.searchSection} id="searchSection">
      <div className={styles.upperRow}>
        <div className={styles.profileHolder} id="profileIcon">
          <Image src={profileTobias} alt="profile" className={styles.profileIcon} />
        </div>
        <h1 id="title" className={styles.title}>
          {profileData.name} {profileData.last_name}
        </h1>
      </div>
      <div className={styles.lowerRow}>
        <SearchBar />
      </div>
    </div>
  );
}
