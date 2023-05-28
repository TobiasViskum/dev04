"use client";

import styles from "./Header.module.scss";
import sharedStyles from "../PageLayout.module.scss";

import { settingsPng } from "@/assets/images";
import Image from "next/image";

export default function Header({
  title,
  isHeaderActive,
}: {
  title: string;
  isHeaderActive: boolean;
}) {
  return (
    <>
      <header
        className={
          sharedStyles.sharedStyles +
          " " +
          styles.header +
          " " +
          (isHeaderActive ? styles.headerActive : "")
        }
      >
        <nav className={styles.navbar}>
          <div />
          <p className={styles.title}>{title}</p>
          <div className={styles.settingsHolder}>
            <Image src={settingsPng} alt="settings" className={styles.settingsIcon} />
          </div>
        </nav>
      </header>
      <div className={styles.bottomMargin} />
    </>
  );
}
