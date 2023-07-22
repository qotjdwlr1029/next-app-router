import { NextResponse } from "next/server";

export async function GET(request) {
  // Do whatever you want
  return NextResponse.json({ message: "user route" }, { status: 200 });
}
