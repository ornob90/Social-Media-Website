import connectDB from "@/server/db/connectDB";
import User from "@/server/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions, Session } from "next-auth";
import { userInfo } from "os";
import { IUser } from "@/types/models.types";

export const options: NextAuthOptions = {
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
          id: user?._id?.toString(),
          email: user?.email,
          image: user?.photoUrl,
          name: user?.userName,
        };
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token }) {
      if (token?.user) {
        const { password, ...restUser } = token.user as IUser;

        session.user = restUser;
      }
      // console.log(token);
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        await connectDB();
        const userInfo = await User.findById(user.id);
        const { password, ...restUserData } = userInfo;
        token.user = restUserData;
      }
      // console.log(user);
      // console.log(token);
      return token;
    },
    async signIn({ user, account }) {
      if (account?.provider === "credentials") {
        await connectDB();

        const userInfo = await User.findOne({ _id: user.id });

        console.log({ id: user.id });

        return userInfo;
      } else return true;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};
