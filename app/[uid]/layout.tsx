import { userAuthServer, UserAuthClient } from "@/lib/auth";
import { Header } from "@/components/viskum-app/page-index";
import {} from "next/server";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { uid: string };
}) {
  const uid = params.uid;

  await userAuthServer(uid);

  return (
    <>
      <UserAuthClient uid={uid} />
      <Header />
      <>{children}</>
    </>
  );
}
