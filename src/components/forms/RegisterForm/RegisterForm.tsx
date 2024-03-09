"use client";
import Button from "@/components/html/Button/Button";
import { RegisterTypes, Status } from "@/types/auth.types";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterTypes>();
  const [isExist, setIsExist] = useState({ message: "" });

  const onSubmit: SubmitHandler<RegisterTypes> = async (formData) => {
    // const { userName, displayName, password, email } = data;
    try {
      const { data } = await axios.post("/api/auth/register", formData);

      if (data?.status === Status.EXIST) {
        setIsExist({
          message: data?.message,
        });
        return;
      }

      // const response = await signIn("credentials", {
      //   userName,
      //   displayName,
      //   password,
      //   email,
      // });

      // if (!response?.error) {
      //   redirect("/");
      // }

      // if (!response?.ok) {
      //   throw new Error("Network response was not ok!");
      // }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-4 w-full md:w-[70%] lg:w-1/2"
    >
      <input
        {...register("userName")}
        className="py-3 focus:outline-none  pl-2 bg-light-gray rounded-lg placeholder:text-sm"
        placeholder="Username"
      />
      <input
        className="py-3 focus:outline-none  pl-2 bg-light-gray rounded-lg placeholder:text-sm"
        placeholder="Display name"
        {...register("displayName")}
      />
      <input
        className="py-3 focus:outline-none  pl-2 bg-light-gray rounded-lg placeholder:text-sm"
        placeholder="Email"
        type="email"
        {...register("email")}
      />
      <input
        className="py-3 focus:outline-none  pl-2 bg-light-gray rounded-lg placeholder:text-sm"
        placeholder="password"
        type="password"
        {...register("password")}
      />
      {isExist?.message && (
        <p className=" text-red-600 text-[12px]">{isExist?.message}</p>
      )}
      <p className="text-[12px] text-dark-gray">
        By signing up, you agree to the Terms of Service and Privacy Policy,
        including Cookie Use. Others will be able to find you by email or phone
        number when provided
      </p>
      <Button className="py-2 rounded-lg">Next</Button>
      <p className="text-[12px] text-dark-gray">
        Already have an account?
        <Link href="/login" className="text-primary font-bold underline">
          Log in
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
