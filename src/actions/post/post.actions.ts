"use server";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { Post } from "@/types/post.types";
import { getServerSession } from "next-auth";

export const getNewsFeedPosts = async (page: number) => {
  try {
    const session = await getServerSession(options);
    const token = session?.user?.apiToken;
    const user = session?.user;

    console.log({ user });

    const response = await fetch(
      process.env.NEXT_AUTH_BASE_URL +
        `/posts/all/${user?._id}?page=${page}&limit=10`
    );

    const data = await response.json();

    if (data?.acknowledgement) {
      return data?.data;
    }

    return null;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
};

export const getPostDetails = async (postId: string): Promise<Post | null> => {
  try {
    const session = await getServerSession(options);

    const response = await fetch(
      process.env.SERVER_BASE_URL +
        `/posts/owner/${session?.user?._id}/${postId}`
    );
    const result = await response.json();

    if (result?.acknowledgement) {
      return result?.data;
    }

    return null;
  } catch (error) {
    return null;
  }
};
