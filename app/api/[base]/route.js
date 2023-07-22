import { NextResponse } from "next/server";

export async function GET(request, response) {
  // Do whatever you want
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  const res = await fetch(`http://localhost:3001/today?date=${date}`);
  const data = await res.json();
  if (!data.length) {
    return NextResponse.json({ message: "no data found" }, { status: 500 });
  }

  return NextResponse.json({ message: data }, { status: 200 });
}
