import styles from "./page.module.scss";
import { getProfileData, getAppData } from "@/lib/viskum-app/db-calls";
import {
  Header,
  Footer,
  SearchSection,
  FavoritesSections,
  TabsSection,
} from "@/components/viskum-app/page-index";
import { indexStaticPages } from "@/lib/viskum-app/util";

import { userAuth } from "@/lib/viskum-app/auth/userAuth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viskum App",
};

export async function generateStaticParams() {
  return indexStaticPages();
}

export default async function page({ params }: ViskumAppParams) {
  const uid = params.uid;
  await userAuth(uid);

  const [[profileData], appData] = await Promise.all([getProfileData(uid), getAppData()]);

  return (
    <>
      <Header />
      <main className={styles.main} id="main">
        <SearchSection profileData={profileData} />
        <FavoritesSections profileData={profileData} appData={appData} />
        <TabsSection profileData={profileData} appData={appData} />
      </main>
      <Footer />
    </>
  );
}
