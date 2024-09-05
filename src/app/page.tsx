import Header from "@/components/shared/header/Header";
import Posts from "@/components/ui/post/Posts/Posts";
import { Session, getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <main className="w-full">
      <Header header="Home" />
      <Posts />
    </main>
  );
}
