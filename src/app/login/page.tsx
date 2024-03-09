import LoginForm from "@/components/forms/LoginForm/LoginForm";
import Header from "@/components/shared/header/Header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }
  return (
    <section>
      <Header header="Sign in with your account" />
      <LoginForm />
    </section>
  );
};

export default Login;
