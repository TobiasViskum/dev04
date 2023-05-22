import { execute } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const input = searchParams.get("input");

  const q = "SELECT * FROM dim_profile WHERE uid=(?)";
  const val = [input];

  const result: ProfilesNoJoin[] = await execute(q, val);

  let passed = false;
  if (result.length > 0) {
    passed = true;
  }

  return NextResponse.json({ passed: passed, status: "succes" });
}
