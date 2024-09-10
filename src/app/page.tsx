import Header from "@/components/shared/header/Header";
import Posts from "@/components/ui/post/Posts/Posts";
import { Session, getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { getNewsFeedPosts } from "@/actions/post/post.actions";
import { Suspense } from "react";
import PostSkeleton from "@/components/skeletons/PostSkeleton";

export default async function Home() {
  const session = await getServerSession(options);

  console.log(session);

  const { totalPosts, posts } = (await getNewsFeedPosts(1)) || {};

  return (
    <main className="w-full rounded-xl">
      <Header header="Home" />
      <Suspense
        fallback={
          <>
            <section className="flex  flex-col gap-y-4">
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
