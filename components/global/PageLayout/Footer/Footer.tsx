"use client";

import styles from "./Footer.module.scss";
import sharedStyles from "../PageLayout.module.scss";
import Image from "next/image";

interface Props {
  footerContent: {
    name: string;
    imageActive: string;
    imageInactive: string;
  }[];
  isFooterActive: boolean;
}

export default function Footer(props: Props) {
  return (
    <>
      <footer
        className={
          sharedStyles.sharedStyles +
          " " +
          styles.footer +
          " " +
          (props.isFooterActive ? styles.headerActive : "")
        }
      >
        <div>d</div>
      </footer>
      <div className={styles.topMargin}></div>
    </>
  );
}
