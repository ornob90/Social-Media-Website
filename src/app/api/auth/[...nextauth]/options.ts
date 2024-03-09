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
        forSigned: {},
      },
      async authorize(credentials, req) {
        const { userName, displayName, email, password, forSigned } =
          credentials || {};
        console.log({ userName, displayName, email, password, forSigned });
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
};
