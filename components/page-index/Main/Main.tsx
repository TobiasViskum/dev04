import styles from "./Main.module.scss";
import SearchSection from "../SearchSection/SearchSection";

interface Props {
  profileData: string;
}

export default function Main(props: Props) {
  const profileData: ProfileData = JSON.parse(props.profileData);

  return (
    <main className={styles.main}>
      <SearchSection profileData={profileData} />
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nesciunt possimus.
      Aliquam, sunt consequatur. Ipsum facilis exercitationem rem suscipit consectetur temporibus
      nam? Error optio, ut a fugit exercitationem tempora temporibus inventore laboriosam. Ratione
      delectus voluptatum, facere quis sint cupiditate omnis ipsam atque cumque perferendis nulla
      nam aut ipsum. Dolorem provident deserunt obcaecati possimus. Dolores assumenda quibusdam at
      tenetur magnam? Facilis enim quo ad inventore error quia iste ipsum sapiente molestias in
      dolorem fugiat ducimus nemo excepturi doloremque, fuga dicta voluptas fugit iure modi omnis
      dolorum voluptatibus quod quas! Corrupti labore quidem quos sequi vitae fugit tempora dolores
      dolorum possimus numquam.
    </main>
  );
}
