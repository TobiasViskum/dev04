"use client";

import styles from "./SearchBar.module.scss";
import Image from "next/image";
import { search } from "@/assets/images";
import { useRef } from "react";

export default function SearchBar() {
  const searchbar = useRef<HTMLInputElement | null>(null);

  function handleFocus(newState: boolean) {
    const searchSection = document.getElementById("searchSection");
    const main = document.getElementById("main");

    if (!searchSection || !main) return;

    if (newState) {
      // searchSection.style.setProperty("--searching-template-rows", "0fr 1fr");
      // searchSection.style.setProperty("--searching-opacity", "0");
      // main.style.setProperty("--main-template-rows", "1fr 0fr 0fr");
    } else {
      // searchSection.style.setProperty("--searching-template-rows", "1fr 1fr");
      // searchSection.style.setProperty("--searching-opacity", "1");
      // main.style.setProperty("--main-template-rows", "1fr 1fr 1fr");
      searchbar.current?.blur();
    }
  }

  return (
    <>
      <div className={styles.container} id="searchbar">
        <div className={styles.searchIconHolder}>
          <Image src={search} alt="search icon" className={styles.searchIcon} />
        </div>
        <div className={styles.border} />
        <input
          ref={searchbar}
          id="searchInput"
          spellCheck={false}
          placeholder="Search..."
          className={styles.searchBar}
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
        />
      </div>
    </>
  );
}
