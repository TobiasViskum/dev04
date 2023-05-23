"use client";
import styles from "./SearchSection.module.scss";
import { useWindowEvent } from "@mantine/hooks";
import { useState, useEffect } from "react";

interface Props {
  profileData: ProfileData;
}

export default function Header(props: Props) {
  const profileData = props.profileData;
  const [titleContent, setTitleContent] = useState(`${profileData.name} ${profileData.last_name}`);

  function setContent() {
    if (window.innerWidth < 350) {
      setTitleContent(profileData.name);
    } else {
      setTitleContent(`${profileData.name} ${profileData.last_name}`);
    }
  }

  useEffect(() => {
    setContent();
    window.addEventListener("resize", (e) => {
      setContent();
    });
  }, []);

  return (
    <h1 id="title" className={styles.title}>
      {titleContent}
    </h1>
  );
}
