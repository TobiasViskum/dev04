import Link from "next/link";
import { userAuth } from "@/lib/auth";

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
