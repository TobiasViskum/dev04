"use client";

import { useEffect } from "react";

interface Props {
  updateHeader: (newState: boolean) => void;
}
export default function firstRender(props: Props) {
  const updateHeader = props.updateHeader;

  return useEffect(() => {
    if (typeof document == "undefined") return;
    const title = document.getElementById("title");
    const documentStyle = document.documentElement.style;

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
        rootMargin: window.innerWidth < 600 ? "-56px" : "-72px",
      }
    );

    observer.observe(title);
  }, []);
}
