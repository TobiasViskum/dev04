"use client";

import styles from "./Header.module.scss";
import { settingsPng } from "@/assets/images";
import Image from "next/image";
import { useState } from "react";
import { hooks } from "@/lib/hooks/page-index";

export default function Header() {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  function updateHeader(newState: boolean) {
    setIsHeaderActive(newState);
  }

  hooks.useFirstRender({ updateHeader });

  return (
    <header className={styles.header + " " + (isHeaderActive ? styles.headerActive : "")}>
      <nav className={styles.navbar}>
        <div />
        <p className={styles.title}>Home</p>
        <div className={styles.settingsHolder}>
          <Image src={settingsPng} alt="settings" className={styles.settingsIcon} />
        </div>
      </nav>
    </header>
  );
}
