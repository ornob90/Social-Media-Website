import Header from "@/components/shared/header/Header";
import Posts from "@/components/ui/post/Posts/Posts";
import { Session, getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { getNewsFeedPosts } from "@/actions/post/post.actions";
import { Suspense } from "react";
import PostSkeleton from "@/components/skeletons/PostSkeleton";

export default async function Home() {
  const session = await getServerSession(options);

  const { totalPosts, posts } = (await getNewsFeedPosts(1)) || {};

  return (
    <main className="w-full bg-white p-8 rounded-xl">
      <Header header="Home" />
      <Suspense
        fallback={
          <>
            <section className="flex bg-white flex-col gap-y-10">
              {[1, 2, 3, 4, 5].map((p) => (
                <PostSkeleton key={p} />
              ))}
            </section>
          </>
        }
      >
        <Posts initialPosts={posts} fetchPosts={getNewsFeedPosts} />
      </Suspense>
    </main>
  );
}
