"use server";

export const signIn = async (formData: FormData) => {
  const userName = formData.get("userName");
  const displayName = formData.get("displayName");
  const password = formData.get("password");
  const email = formData.get("email");

  console.log({ userName, displayName, password, email });
};
