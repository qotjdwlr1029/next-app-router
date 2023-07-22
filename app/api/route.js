import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await fetch("http://localhost:3001/today");
  const data = await res.json();
  console.log(data);
  if (!data) {
    return NextResponse.json({ message: "no data found" }, { status: 500 });
  }

  return NextResponse.json({ message: data }, { status: 200 });
}
