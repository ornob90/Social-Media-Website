import Header from "@/components/shared/header/Header";
import Posts from "@/components/ui/post/Posts/Posts";

export default function Home() {
  return (
    <main className="w-full">
      <Header header="Home" />
      <Posts />
    </main>
  );
}
