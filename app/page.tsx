import styles from "./page.module.scss";
import { getProfileData, getAppData } from "@/lib/db";
import { Header, Main, Footer } from "@/components/page-index";
import { userAuth } from "@/lib/auth/userAuth";

export default async function page(pageProps: any) {
  const uid = pageProps.searchParams.uid;
  await userAuth(uid);

  const [[profileData], appData] = await Promise.all([getProfileData(uid), getAppData()]);

  return (
    <>
      <Header />
      <Main profileData={JSON.stringify(profileData)} appData={JSON.stringify(appData)} />
      <Footer />
    </>
  );
}
