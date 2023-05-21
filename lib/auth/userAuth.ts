import { execute } from "../db";
import { redirect } from "next/navigation";
import { encryptUid } from "./encryptUid";
import confirmPassword from "./confirmPassword";

export async function userAuth(uid: string) {
  if (uid == undefined) redirect("/login");

  const q = "SELECT * FROM dim_profile WHERE uid=(?)";
  const val = [uid];

  const result = await execute(q, val);

  if (result.length == 0) {
    redirect(`/login?uid=${uid}`);
  }
  return uid;
}
