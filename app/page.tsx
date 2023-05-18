import styles from "./page.module.scss";
import { getProfileData } from "@/lib/db";
import { Header, Main, Footer } from "@/components/page-index";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const [profileData] = await getProfileData();

  return (
    <>
      <Header />
      <Main profileData={JSON.stringify(profileData)} />
      <Footer />
    </>
  );
}
