import Button from "@/components/html/Button/Button";
import Input from "@/components/html/Input/Input";
import Header from "@/components/shared/header/Header";
import Link from "next/link";

const Login = () => {
  return (
    <section>
      <Header header="Sign in with your account" />
      <form
        action=""
        className="flex flex-col gap-4 mt-4 w-full md:w-[70%] lg:w-1/2"
      >
        <Input
          className="py-3 pl-2 bg-light-gray rounded-lg placeholder:text-sm"
          placeholder="Email"
          type="email"
          required
        />
        <Input
          className="py-3 pl-2 bg-light-gray rounded-lg placeholder:text-sm"
          placeholder="password"
          type="password"
          required
        />

        <Button className="py-2 rounded-lg">Sign In</Button>
        <p className="text-[12px] text-dark-gray">
          Are you new here?
          <Link href="/signup" className="text-primary font-bold underline">
            Sign up
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
