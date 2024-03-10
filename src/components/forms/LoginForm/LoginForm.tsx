"use client";
import Button from "@/components/html/Button/Button";
import LoadingBtn from "@/components/html/Button/LoadingBtn";
import { LoginTypes } from "@/types/auth.types";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginTypes>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginTypes> = async (data) => {
    setLoading(true);
    const { email, password } = data;
    try {
      const response = await signIn("credentials", {
        email,
        password,
        forSigned: true,
        redirect: false,
      });

      console.log(!response?.error);

      if (!response?.error) {
        setLoading(false);
        redirect("/");
      }

      if (!response?.ok) {
        setLoading(false);
        throw new Error("Network response was not ok!");
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-4 w-full md:w-[70%] lg:w-1/2"
    >
      <input
        className="focus:outline-none py-3 pl-2 bg-light-gray rounded-lg placeholder:text-sm"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
        })}
      />
      <input
        className="focus:outline-none py-3 pl-2 bg-light-gray rounded-lg placeholder:text-sm"
        placeholder="password"
        type="password"
        {...register("password", { required: true })}
      />

      {loading ? (
        <LoadingBtn>Signing up...</LoadingBtn>
      ) : (
        <Button className="py-2 rounded-lg bg-primary text-white">
          Sign In
        </Button>
      )}

      <p className="text-[12px] text-dark-gray">
        Are you new here?
        <Link href="/register" className="text-primary font-bold underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
