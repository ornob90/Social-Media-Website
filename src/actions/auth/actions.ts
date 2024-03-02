"use server";

import { signIn } from "next-auth/react";
// import { redirect } from "next/navigation";

export async function register(formData: FormData) {
  const userName = formData.get("userName");
  const displayName = formData.get("displayName");
  const password = formData.get("password");
  const email = formData.get("email");

  try {
    const response = await signIn("credentials", {
      userName,
      displayName,
      password,
      email,
    });

    // if (!response?.error) {
    //   redirect("/");
    // }

    if (!response?.ok) {
      throw new Error("Network response was not ok!");
    }
  } catch (error: any) {
    console.log(error.message);
  }
}
