import { execute } from "@/lib/db";
import { redirect } from "next/navigation";

export async function userAuth(uid: string, specialAction?: string) {
  if (uid == undefined) redirect("/viskum-app/login");

  const q = "SELECT * FROM dim_profile WHERE uid=(?)";
  const val = [uid];

  const result = await execute(q, val);

  if (result.length == 0 && specialAction == undefined) {
    redirect(`/viskum-app/login`);
  }

  return result;
}
