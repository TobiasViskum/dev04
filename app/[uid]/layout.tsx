import { userAuthServer, UserAuthClient } from "@/lib/auth";
import { PageLayout } from "@/components/global";

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
      <PageLayout>{children}</PageLayout>
    </>
  );
}
