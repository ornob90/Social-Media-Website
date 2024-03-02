import Button from "@/components/html/Button/Button";
import Input from "@/components/html/Input/Input";
import Header from "@/components/shared/header/Header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

const Register = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }
  return (
    <section className="">
      <Header header="Create your account" />
      <form
        action=""
        className="flex flex-col gap-4 mt-4 w-full md:w-[70%] lg:w-1/2"
      >
        <Input
          className="py-3 pl-2 bg-light-gray rounded-lg placeholder:text-sm"
          placeholder="Username"
        />
        <Input
          className="py-3 pl-2 bg-light-gray rounded-lg placeholder:text-sm"
          placeholder="Display name"
        />
        <Input
          className="py-3 pl-2 bg-light-gray rounded-lg placeholder:text-sm"
          placeholder="Email"
          type="email"
        />
        <Input
          className="py-3 pl-2 bg-light-gray rounded-lg placeholder:text-sm"
          placeholder="password"
          type="password"
        />
        <p className="text-[12px] text-dark-gray">
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use. Others will be able to find you by email or
          phone number when provided
        </p>
        <Button className="py-2 rounded-lg">Next</Button>
        <p className="text-[12px] text-dark-gray">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-bold underline">
            Log in
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
