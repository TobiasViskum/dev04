"use client";

import styles from "./Main.module.scss";
import { useState, useEffect, useRef } from "react";

export default function Main() {
  const [isScrolled, setIsScrolled] = useState(false);
  const title = useRef<HTMLHeadingElement>(null);

  function handleClick(newState: boolean) {
    const header = document.getElementById("header");
    header?.classList.toggle("Header_headerActive__vrC5s", newState);
    setIsScrolled(newState);
  }

  useEffect(() => {
    const target = document.getElementById("homeTitle");

    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleClick(false);
          } else {
            handleClick(true);
          }
        });
      },
      {
        threshold: 0.75,
      }
    );

    observer.observe(target);
  }, []);

  const spaces = (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );

  return (
    <>
      <br />
      <h1 id="homeTitle">Home</h1>
      <div className={styles.mainGrid} id="mainbody"></div>
      <button onClick={() => handleClick(!isScrolled)}>Click me test</button>
      {spaces}
      {spaces}
      {spaces}
      {spaces}
    </>
  );
}
