"use client";

import styles from "./Main.module.scss";
import Image from "next/image";
import { profileTobias } from "@/assets/images";
import { translator } from "@/lib/util/translator";

interface Props {
  profileData: string;
}

export default function Main(props: Props) {
  const profileData: ProfileData = JSON.parse(props.profileData);

  return (
    <main className={styles.main}>
      <div className={styles.searchSection}>
        <div className={styles.upperRow}>
          <div className={styles.profileHolder}>
            <Image src={profileTobias} alt="profile" className={styles.profileIcon} />
          </div>
          <h1 id="title" className={styles.title}>
            {translator("Family")}, {profileData.last_name}
          </h1>
        </div>
        <div className={styles.lowerRow}>
          <input className={styles.searchbar} />
        </div>
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita consectetur esse sequi
        nesciunt quis quisquam qui ipsa animi. Nobis ullam sint suscipit voluptatem debitis incidunt
        exercitationem nulla, corrupti molestias atque iusto, ab at ratione iure illo aperiam quae
        dignissimos fugiat asperiores eum! Pariatur, quasi earum provident hic iste fugiat veritatis
        quibusdam libero, neque eaque quas, autem dicta aliquid mollitia in. Placeat eos quam
        perferendis adipisci? Mollitia modi a velit sed ipsa nesciunt tenetur temporibus sequi culpa
        nemo fugit molestias eos consequatur ut dolorem odit, labore nobis architecto accusamus!
        Molestias rem vero aliquid excepturi omnis obcaecati nisi eos expedita fugit. Porro.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sit tempora laborum
        voluptatibus illum rerum maiores! Dolores quos, atque impedit officia cum enim earum
        sapiente natus mollitia aperiam, magni beatae esse facilis assumenda quas repellendus,
        voluptatem explicabo aspernatur exercitationem fugit vitae repellat accusantium veniam. In
        velit illo distinctio illum quo quibusdam? Necessitatibus pariatur odio quaerat placeat?
        Quam placeat exercitationem molestias odio at nobis nostrum iste ipsa. Similique iste, eos
        temporibus accusamus consequuntur earum ab, error quas, atque eaque minus mollitia fugit! Ad
        voluptatem, et aperiam perspiciatis maiores fugit corporis harum culpa deserunt recusandae
        incidunt veritatis necessitatibus maxime velit earum eius ducimus laborum porro iusto soluta
        praesentium alias hic minima cum? Rem consequuntur obcaecati repellat laborum magnam
        tenetur! Dolores cupiditate sunt quo ut nulla libero, debitis culpa animi, unde eius nisi
        tempore magni nihil, explicabo ex aliquam assumenda? Nostrum corrupti maxime eligendi natus
        voluptatibus reprehenderit vero accusamus adipisci quis. Facilis perspiciatis omnis non
        delectus, voluptate itaque soluta totam hic incidunt dolore sunt, ratione numquam sequi
        laborum enim nesciunt, neque blanditiis necessitatibus molestiae nostrum odio. Doloremque
        temporibus itaque earum officia eum, ducimus voluptate et? Aliquam, harum. Consequuntur,
        eveniet? Alias iusto similique facere id pariatur? Labore repudiandae quisquam iste
        sapiente, optio corrupti rem.
      </div>
    </main>
  );
}
