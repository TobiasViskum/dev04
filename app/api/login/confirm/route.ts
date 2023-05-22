import { NextResponse } from "next/server";
import { generateSessionKey } from "@/lib/auth";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get("uid");
  const sessionKey = searchParams.get("sessionKey");

  if (!uid) {
    return NextResponse.json({ newRedirect: `/login`, passed: false, status: "error" }); //this shouldn't happen
  } else if (sessionKey == null) {
    return NextResponse.json({ newRedirect: `/login/${uid}`, passed: false, status: "success" });
  } else {
    if (generateSessionKey(uid) == sessionKey) {
      return NextResponse.json({ newRedirect: `/${uid}`, passed: true, status: "success" });
    } else {
      return NextResponse.json({ newRedirect: `/login/${uid}`, passed: false, status: "success" });
    }
  }
}
