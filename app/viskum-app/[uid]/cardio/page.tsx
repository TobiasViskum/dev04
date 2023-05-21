import Link from "next/link";
import { userAuth } from "@/lib/viskum-app/auth/userAuth";

export default async function page({ params }: ViskumAppParams) {
  const uid = params.uid;

  await userAuth(uid);

  return (
    <>
      <h1>page</h1>
      <Link href={`/viskum-app/${uid}`}>Go back</Link>
    </>
  );
}
