import styles from "./page.module.scss";
import { getProfileData, getAppData } from "@/lib/db";
import { Header, Main, Footer } from "@/components/page-index";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const [[profileData], appData] = await Promise.all([getProfileData(), getAppData()]);

  return (
    <>
      <Header />
      <Main profileData={JSON.stringify(profileData)} appData={JSON.stringify(appData)} />
      <Footer />
    </>
  );
}
