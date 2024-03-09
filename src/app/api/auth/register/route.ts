import User from "@/server/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Status } from "@/types/auth.types";
import connectDB from "@/server/db/connectDB";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password, userName, displayName } = await req.json();

    if (!email || !password || !userName || !displayName) {
      return NextResponse.json({
        status: Status.MISSING,
        message: "Missing Credentials!",
      });
    }

    const user = await User.findOne({
      $or: [{ email }, { userName }],
    });

    if (user) {
      return NextResponse.json({
        status: Status.EXIST,
        message: "user name or email already exist",
      });
    }

    const hashedPass = await bcrypt.hash(password, 5);

    const newUser = new User({
      email,
      password: hashedPass,
      userName,
      displayName,
    });

    await newUser.save();

    return NextResponse.json({
      status: Status.SUCCESS,
      message: "User created successfully",
    });
  } catch (error: any) {
    console.log({ error });
    return NextResponse.json({ status: Status.ERROR, message: error.message });
  }
}
