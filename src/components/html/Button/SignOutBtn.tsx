"use client";
import { BASE_URL } from "@/constants/constants";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

const SignOutBtn = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: BASE_URL + "/login" });
  };
  return (
    <button
      onClick={handleSignOut}
      className="bg-primary text-white hover:bg-primary"
    >
      Sign Out
    </button>
  );
};

export default SignOutBtn;
