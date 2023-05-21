import Link from "next/link";
import { getProfileData } from "@/lib/db";
import { userAuth } from "@/lib/auth/userAuth";

export default async function page(pageProps: any) {
  const uid = pageProps.searchParams.uid;
  await userAuth(uid);

  return (
    <>
      <h1>Fitnesspage</h1>
      <Link href={`/?uid=${uid}`}>Navigate to /</Link>
    </>
  );
}
