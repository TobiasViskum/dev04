import styles from "./page.module.scss";
import { getProfileData, getAppData } from "@/lib/db";
import {
  Header,
  Footer,
  SearchSection,
  FavoritesSections,
  TabsSection,
} from "@/components/page-index";
import { userAuth } from "@/lib/auth/userAuth";

export default async function page(pageProps: any) {
  const uid = pageProps.searchParams.uid;
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
