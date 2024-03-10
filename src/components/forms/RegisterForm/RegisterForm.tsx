"use client";
import Button from "@/components/html/Button/Button";
import { RegisterTypes, Status, isExistStateType } from "@/types/auth.types";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { redirect } from "next/navigation";
import ErrorMessage from "@/components/shared/errorMessage/ErrorMessage";
import LoadingBtn from "@/components/html/Button/LoadingBtn";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterTypes>();
  const [isExist, setIsExist] = useState<isExistStateType>({ message: "" });
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<RegisterTypes> = async (formData) => {
    const { userName, displayName, password, email } = formData;
    setLoading(true);
    setIsExist({ message: "" });
    try {
      const { data } = await axios.post("/api/auth/register", {
        userName,
        displayName,
        password,
        email,
      });

      if (data?.status === Status.EXIST) {
        setIsExist({
          message: data?.message,
        });
        setLoading(false);
        return;
      }

      const response = await signIn("credentials", {
        email,
        password,
      });

      if (!response?.error) {
        redirect("/");
      }

      if (!response?.ok) {
        throw new Error("Network response was not ok!");
      }

      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      console.log(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-4 w-full md:w-[70%] lg:w-1/2"
    >
      <input
        {...register("userName", { required: true })}
        className="py-3 focus:outline-none  pl-2 bg-light-gray rounded-lg placeholder:text-sm"
        placeholder="Username"
      />
      {errors.userName?.type === "required" && (
        <ErrorMessage>User name is required</ErrorMessage>
      )}
      <input
        className="py-3 focus:outline-none  pl-2 bg-light-gray rounded-lg placeholder:text-sm"
        placeholder="Display name"
        {...register("displayName", { required: true })}
      />
      {errors.displayName?.type === "required" && (
        <ErrorMessage>Display name is required</ErrorMessage>
      )}
      <input
        className="py-3 focus:outline-none  pl-2 bg-light-gray rounded-lg placeholder:text-sm"
        placeholder="Email"
        type="email"
        {...register("email", {
          required: true,
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email?.type === "required" && (
        <ErrorMessage>Email is required</ErrorMessage>
      )}
      {errors.email?.type === "pattern" && (
        <ErrorMessage>Invalid email!</ErrorMessage>
      )}
      <input
        className="py-3 focus:outline-none  pl-2 bg-light-gray rounded-lg placeholder:text-sm"
        placeholder="password"
        type="password"
        {...register("password", {
          required: true,
          min: {
            value: 8,
            message: "Password length must be above 8 characters!",
          },
          pattern: {
            value:
              /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]).*$/,
            message:
              "Password must contain at least one uppercase letter, one number, and one special character.",
          },
        })}
      />
      {errors.password?.type === "required" && (
        <ErrorMessage>Password is required</ErrorMessage>
      )}
      {errors.password?.type === "pattern" && (
        <ErrorMessage>
          Invalid password. Required minimum one uppercase, number and a special
          case
        </ErrorMessage>
      )}
      {errors.password?.type === "min" && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      {isExist?.message && <ErrorMessage>{isExist?.message}</ErrorMessage>}
      <p className="text-[12px] text-dark-gray">
        By signing up, you agree to the Terms of Service and Privacy Policy,
        including Cookie Use. Others will be able to find you by email or phone
        number when provided
      </p>
      {loading ? (
        <LoadingBtn>Registering user...</LoadingBtn>
      ) : (
        <Button className="py-2 rounded-lg bg-primary text-white">Next</Button>
      )}

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
