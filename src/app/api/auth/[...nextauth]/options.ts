import connectDB from "@/server/db/connectDB";
import User from "@/server/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions, Session } from "next-auth";
import { userInfo } from "os";
import { IUser } from "@/types/models.types";
import jwt from "jsonwebtoken";

export const SESSION_EXPIRE_TIME = 60 * 60 * 24 * 7;

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
        const { password, ...restUser } = token.user as IUser & {
          apiToken: string;
        };

        const payload = {
          name: restUser.userName,
          email: restUser.email,
          id: restUser._id,
        };

        const apiToken = jwt.sign(payload, process.env.JWT_SECRET_KEY!, {
          expiresIn: "7d",
        });

        console.log(apiToken);

        restUser.apiToken = apiToken;

        console.log(restUser);

        session.user = restUser;
        // session.expires = "7d";
      }
      // console.log(token);
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        await connectDB();
        const userInfo = await User.findById(user.id);
        console.log(userInfo);
        const { password, ...restUserData } = userInfo._doc;

        token.user = restUserData;
        token.iat = Math.floor(Date.now() / 1000);
        token.exp = Math.floor(Date.now() / 1000) + SESSION_EXPIRE_TIME;
      }
      // console.log(user);
      // console.log(token);
      return token;
    },
    async signIn({ user, account }) {
      if (account?.provider === "credentials") {
        await connectDB();

        const userInfo = await User.findOne({ _id: user.id });

        // console.log({ id: user.id });

        return userInfo;
      } else return true;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: SESSION_EXPIRE_TIME,
  },
  jwt: {
    maxAge: SESSION_EXPIRE_TIME,
  },
};
