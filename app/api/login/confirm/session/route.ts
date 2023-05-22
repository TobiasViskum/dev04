import { NextResponse } from "next/server";
import { execute } from "@/lib/db";
import { generateSessionKey } from "@/lib/auth";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const input = searchParams.get("input");
  const uid = searchParams.get("uid");

  const [response]: { password: string }[] = await execute(
    "SELECT password FROM dim_profile WHERE uid=?",
    [uid]
  );

  if (!uid) {
    return NextResponse.json({ passed: false, sessionKey: null, status: "error" });
  } else if (input == response.password) {
    const sessionKey = generateSessionKey(uid);
    return NextResponse.json({ passed: true, sessionKey: sessionKey, status: "sucess" });
  } else {
    return NextResponse.json({ passed: false, sessionKey: null, status: "success" });
  }
}
