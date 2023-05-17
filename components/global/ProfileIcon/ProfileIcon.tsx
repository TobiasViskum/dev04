import Image from "next/image";
import { profileTobias } from "@/assets/images";
import styles from "./ProfileIcon.module.scss";

export default function ProfileIcon() {
  return <Image src={profileTobias} alt="profile" className={styles.image} />;
}
