"use server";
import { userAuth } from "../auth";
import { redirect } from "next/navigation";

export async function handleLogin(data: FormData) {
  const inputText = String(data.get("password"));
  const responseUid = await userAuth(inputText);
  if (responseUid) {
    redirect(`/viskum-app/${responseUid}`);
  }
}
