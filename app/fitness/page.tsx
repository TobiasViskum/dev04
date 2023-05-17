import Link from "next/link";
import { getProfileData } from "@/lib/db";

export default async function page() {
  const [profileData] = await getProfileData();

  return (
    <>
      <h1>Fitnesspage</h1>
      <Link href={"/"}>Navigate to /</Link>
      <p>
        UID from database: <br /> {profileData.uid}
      </p>
    </>
  );
}
