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

    let currentRootMargin = "-32px";
    let observer = beginObserving("-32px");

    window.addEventListener("resize", () => {
      if (window.innerWidth < 600 && currentRootMargin != "-32px") {
        currentRootMargin = "-32px";
        observer?.disconnect();
        observer = beginObserving("-32px");
      } else if (window.innerWidth >= 600 && currentRootMargin != "-48px") {
        currentRootMargin = "-48px";
        observer?.disconnect();
        observer = beginObserving("-48px");
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
