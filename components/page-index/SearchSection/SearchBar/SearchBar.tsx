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
      searchSection.style.setProperty("--searching-template-rows", "0.01fr 1fr");
      searchSection.style.setProperty("--searching-opacity", "0");
    } else {
      searchSection.style.setProperty("--searching-template-rows", "1fr 1fr");
      searchSection.style.setProperty("--searching-opacity", "1");
      searchbar.current?.blur();
    }
  }

  useEffect(() => {
    const searchSection = document.getElementById("searchSection");

    let shrinkElement = document.getElementById("searchbar");
    let shrinkThreshold = 0; // distance to scroll before element starts shrinking
    let shrinkDistance = 10; // distance over which element shrinks
    let isScrolling: any;

    function cancelFocus() {
      handleFocus(false);
      searchbar?.current?.blur();
    }

    window.addEventListener("touchmove", cancelFocus);
    window.addEventListener("touchstart", cancelFocus);

    window.addEventListener("scroll", function (e) {
      let scrollY = window.pageYOffset;
      if (!shrinkElement) return;
      if (scrollY > shrinkThreshold) {
        let shrinkProgress = Math.min(1, (scrollY - shrinkThreshold) / shrinkDistance);
        searchSection?.style.setProperty(
          "--searching-template-rows",
          `1fr ${1 - shrinkProgress}fr`
        );
      } else {
        searchSection?.style.setProperty("--searching-template-rows", "1fr 1fr");
      }

      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function () {
        if (!shrinkElement) return;
        if (scrollY > shrinkThreshold + shrinkDistance) {
          searchSection?.style.setProperty("--searching-template-rows", "1fr 0fr");
        } else {
          searchSection?.style.setProperty("--searching-template-rows", "1fr 1fr");
        }
      }, 66);
    });
  }, []);

  return (
    <>
      <div className={styles.container} id="searchbar">
        <div className={styles.searchIconHolder}>
          <img src={search.src} alt="search icon" className={styles.searchIcon} />
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
