"use client";

import styles from "./SearchBar.module.scss";
import Image from "next/image";
import { search } from "@/assets/images";
import { useEffect, useRef } from "react";

export default function SearchBar() {
  const searchbar = useRef<HTMLInputElement | null>(null);

  function handleFocus(newState: boolean) {
    const searchSection = document.getElementById("searchSection");
    const docElement = document.documentElement;

    if (!searchSection) return;

    if (newState) {
      docElement.scrollTo(0, 8);
      searchSection.style.setProperty("--searching-template-rows", "0.01fr 1fr");
      searchSection.style.setProperty("--searching-opacity", "0");
    } else {
      searchSection.style.setProperty("--searching-template-rows", "1fr 1fr");
      searchSection.style.setProperty("--searching-opacity", "1");
      searchbar.current?.blur();
    }
  }

  useEffect(() => {
    function cancelFocus() {
      handleFocus(false);
      searchbar?.current?.blur();
    }

    window.addEventListener("touchmove", cancelFocus);
    window.addEventListener("touchstart", cancelFocus);
  }, []);

  return (
    <>
      <div className={styles.container} id="searchbar">
        <div className={styles.searchIconHolder}>
          <Image src={search} alt="search icon" className={styles.searchIcon} />
        </div>
        <div className={styles.border} />
        <input
          ref={searchbar}
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
