"use server";
import { userAuth } from "../auth";
import { redirect } from "next/navigation";
import { execute } from "../db";

export async function handleLogin(inputText: string | undefined) {
  const q = "SELECT * FROM dim_profile WHERE uid=(?)";
  const val = [inputText];

  const result = await execute(q, val);

  if (result.length > 0) {
    const dest = `/${inputText}`;
    redirect(dest);
  }
}
