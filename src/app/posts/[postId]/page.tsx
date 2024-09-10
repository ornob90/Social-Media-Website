import { getPostDetails } from "@/actions/post/post.actions";
import PostSkeleton from "@/components/skeletons/PostSkeleton";
import PostDetails from "@/components/ui/post/PostDetails/PostDetails";
import { PageProps } from "@/types/global.types";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const Page = async ({ params, searchParams }: PageProps) => {
  // const postId = params?.postId;
  // const imageIndex = searchParams?.imageIndex || 0;

  // const post = await getPostDetails(postId as string);

  // if (!post) {
  //   return redirect("/");
  // }

  return (
    <Suspense fallback={<PostSkeleton />}>
      <PostDetails />
    </Suspense>
  );
};

export default Page;
