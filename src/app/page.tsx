import Header from "@/components/shared/header/Header";
import Posts from "@/components/ui/post/Posts/Posts";
import { Session, getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  console.log(session?.user);

  return (
    <main className="w-full">
      <Header header="Home" />
      <Posts />
    </main>
  );
}
