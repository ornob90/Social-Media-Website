"use client";
import { SESSION_EXPIRE_TIME } from "@/app/api/auth/[...nextauth]/options";
import { SessionProvider } from "next-auth/react";
import React from "react";

const NextAuthSessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthSessionProvider;
