"use client";

import { useEffect } from "react";

interface Props {
  updateHeader: (newState: boolean) => void;
}
export default function useFirstRender(props: Props) {
  const updateHeader = props.updateHeader;

  return useEffect(() => {
    if (typeof document == "undefined") return;
    const style = getComputedStyle(document.documentElement);

    const observingElement = document.getElementById("profileIcon");

    let currState = false;

    window.addEventListener("scroll", () => {
      if (!observingElement) return;
      const navbarHeight = Number(style.getPropertyValue("--navbar-height").replace("px", ""));
      const distanceFromTop = observingElement.getBoundingClientRect().top;

      if (distanceFromTop <= navbarHeight && currState == false) {
        currState = true;
        updateHeader(true);
      } else if (distanceFromTop > navbarHeight && currState == true) {
        currState = false;
        updateHeader(false);
      }
    });
  }, []);
}
