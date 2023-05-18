"use client";

import styles from "./SearchBar.module.scss";
import Image from "next/image";
import { search } from "@/assets/images";

export default function SearchBar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.searchIconHolder}>
          <img src={search.src} alt="search icon" className={styles.searchIcon} />
        </div>
        <div className={styles.border} />
        <input spellCheck={false} placeholder="Search..." className={styles.searchBar} />
      </div>
    </>
  );
}
