import Header from "@/components/shared/header/Header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import RegisterForm from "@/components/forms/RegisterForm/RegisterForm";

const Register = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }
  return (
    <section className="">
      <Header header="Create your account" />
      <RegisterForm />
    </section>
  );
};

export default Register;
