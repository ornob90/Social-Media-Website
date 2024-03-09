import connectDB from "@/server/db/connectDB";
import User from "@/server/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { IUser } from "@/types/models.types";
import { CredentialsReturnType } from "@/types/auth.types";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
        displayName: {},
        userName: {},
        forSigned: {},
      },
      async authorize(credentials, req): Promise<CredentialsReturnType | null> {
        const { userName, displayName, email, password, forSigned } =
          credentials || {};

        await connectDB();

        if (forSigned) {
          // Login Part
          console.log("Login");
        } else {
          // Register Part
          const user: IUser | null = await User.findOne({ email });

          if (user) {
            return null;
          }

          const hashedPass = await bcrypt.hash(password, 10);

          const userToAdd = {
            userName,
            displayName,
            email,
            password: hashedPass,
          };

          // console.log();
          return null;
          // redirect("/register");
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
};
