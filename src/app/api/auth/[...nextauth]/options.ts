import connectDB from "@/server/db/connectDB";
import User from "@/server/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const { email, password } = credentials || {};

        // console.log({ email, password });
        if (!email || !password) {
          return null;
        }

        await connectDB();

        const user = await User.findOne({ email });

        if (!user) {
          return null;
        }

        const passwordMatched = await bcrypt.compare(
          password || "",
          user.password
        );

        if (!passwordMatched) {
          return null;
        }

        return {
          id: user?._id,
          email: user?.email,
          photoUrl: user?.photoUrl,
          userName: user?.userName,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
};
