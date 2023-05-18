"use client";

import { useEffect } from "react";

interface Props {
  updateHeader: (newState: boolean) => void;
}
export default function useFirstRender(props: Props) {
  const updateHeader = props.updateHeader;

  return useEffect(() => {
    if (typeof document == "undefined") return;
    const title = document.getElementById("title");

    let smallSize = "-75px";
    let bigSize = "-90px";

    let currentRootMargin = smallSize;
    let observer = beginObserving(smallSize);

    window.addEventListener("resize", () => {
      if (window.innerWidth < 600 && currentRootMargin != smallSize) {
        currentRootMargin = smallSize;
        observer?.disconnect();
        observer = beginObserving(smallSize);
      } else if (window.innerWidth >= 600 && currentRootMargin != bigSize) {
        currentRootMargin = bigSize;
        observer?.disconnect();
        observer = beginObserving(bigSize);
      }
    });

    function beginObserving(rootMargin: string) {
      if (!title) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateHeader(false);
            } else {
              updateHeader(true);
            }
          });
        },
        {
          rootMargin: rootMargin,
        }
      );

      observer.observe(title);

      return observer;
    }
  }, []);
}
