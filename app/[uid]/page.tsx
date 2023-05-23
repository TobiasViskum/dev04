import styles from "./page.module.scss";
import { getProfileData, getAppData } from "@/lib/db";
import {
  Footer,
  SearchSection,
  FavoritesSection,
  TabsSection,
} from "@/components/viskum-app/page-index";
// import { indexStaticPages } from "@/lib/util";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

// export async function generateStaticParams() {
//   return indexStaticPages();
// }

export default async function page({ params }: ViskumAppParams) {
  const uid = params.uid;
  const [[profileData], appData] = await Promise.all([getProfileData(uid), getAppData()]);
  if (profileData.favorites != null) {
    profileData.favorites = JSON.parse(profileData.favorites);
  }

  const strProfileData = JSON.stringify(profileData);
  const strAppData = JSON.stringify(appData);

  return (
    <>
      <main className={styles.main} id="main">
        <SearchSection profileData={strProfileData} />
        <FavoritesSection profileData={strProfileData} appData={strAppData} />
        <TabsSection profileData={strProfileData} appData={strAppData} />
      </main>
      <Footer />
    </>
  );
}
