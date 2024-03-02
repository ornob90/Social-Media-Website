import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    console.log({ email, password });
  } catch (error) {
    console.log({ error });
  }

  return NextResponse.json({ message: "success" });
}
