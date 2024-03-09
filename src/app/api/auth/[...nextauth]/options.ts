import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
        displayName: {},
        userName: {},
      },
      async authorize(credentials, req) {
        const { userName, displayName, email, password } = credentials || {};
        console.log({ userName, displayName, email, password });
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
};
