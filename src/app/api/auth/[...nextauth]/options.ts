import connectDB from "@/server/db/connectDB";
import User from "@/server/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions, Session } from "next-auth";

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
      if (session?.user) {
        session.user.oid = token.sub!;
      }
      console.log(token);
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      console.log(user);
      console.log(token);
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};
