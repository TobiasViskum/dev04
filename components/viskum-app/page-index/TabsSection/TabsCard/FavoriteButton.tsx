"use client";

import styles from "./TabsCard.module.scss";
import Image from "next/image";
import { star_full, star_outline } from "@/assets/images";

interface Props {
  isFavorite: string | undefined;
}

export default function FavoriteButton(props: Props) {
  const isFavorite = props.isFavorite;

  return (
    <>
      <button className={styles.favoriteIconHolder} onClick={() => console.log("hej")}>
        <Image
          src={isFavorite ? star_full : star_outline}
          alt="icon"
          className={styles.favoriteIcon}
        />
      </button>
    </>
  );
}
