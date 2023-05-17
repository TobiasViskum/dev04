"use client";

import styles from "./Header.module.scss";
import { settingsPng } from "@/assets/images";
import Image from "next/image";

export default function Header() {
  return (
    <header id="header" className={styles.header}>
      <div />
      <p className={styles.title}>Home</p>
      <div className={styles.settingsHolder}>
        <Image src={settingsPng} alt="settings" className={styles.settingsIcon} />
      </div>
    </header>
  );
}
