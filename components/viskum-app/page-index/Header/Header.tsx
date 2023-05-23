"use client";

import styles from "./Header.module.scss";
import { settingsPng } from "@/assets/images";
import Image from "next/image";
import { useState, useEffect } from "react";
import { hooks } from "@/lib/hooks/page-index";
import { usePathname } from "next/navigation";
import { firstLetterUppercase } from "@/lib/util";

export default function Header() {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [title, setTitle] = useState("");
  const pathname = usePathname();

  function updateHeader(newState: boolean) {
    setIsHeaderActive(newState);
  }
  function setHeaderTitle(str: string) {
    setTitle(str);
  }

  hooks.useFirstRender({ updateHeader });
  hooks.usePathnameEvent({ setHeaderTitle });

  return (
    <>
      <div className={styles.topMargin} />
      <header className={styles.header + " " + (isHeaderActive ? styles.headerActive : "")}>
        <nav className={styles.navbar}>
          <div />
          <p className={styles.title}>{title}</p>
          <div className={styles.settingsHolder}>
            <Image src={settingsPng} alt="settings" className={styles.settingsIcon} />
          </div>
        </nav>
      </header>
    </>
  );
}
