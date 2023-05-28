"use client";

import { useEffect } from "react";

interface Props {
  updateHeader: (newState: boolean) => void;
  updateFooter: (newState: boolean) => void;
}
export default function useFirstRenderEvent(props: Props) {
  useEffect(() => {
    const updateHeader = props.updateHeader;
    const searchSection = document.getElementById("searchSection");
    const searchbar = document.getElementById("searchInput");
    const observingElement = document.getElementById("profileIcon");

    const style = getComputedStyle(document.documentElement);

    let currState = false;

    function cancelFocus() {
      if (!searchbar) return;
      searchbar.blur();
    }

    window.addEventListener("touchmove", cancelFocus);
    window.addEventListener("touchmove", cancelFocus);
    window.addEventListener("scroll", () => {
      if (!observingElement || !searchSection || !searchbar) return;
      const navbarHeight = Number(style.getPropertyValue("--navbar-height").replace("px", ""));
      const distanceFromTop = observingElement.getBoundingClientRect().top;

      if (distanceFromTop <= navbarHeight && currState == false) {
        currState = true;
        updateHeader(true);
        // searchSection.style.setProperty("--searching-template-rows", "1fr 0fr");
        // searchSection.style.setProperty("--searching-opacity", "1");
        searchbar.blur();
      } else if (distanceFromTop > navbarHeight && currState == true) {
        currState = false;
        updateHeader(false);
        // searchSection.style.setProperty("--searching-template-rows", "1fr 1fr");
        // searchSection.style.setProperty("--searching-opacity", "1");
        searchbar.blur();
      }
    });
  }, [props.updateHeader]);
}
