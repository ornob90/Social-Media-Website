"use server";

import { Post } from "@/types/post.types";
import { getServerSession } from "next-auth";

export const getNewsFeedPosts = async (page: number) => {
  try {
    const session = await getServerSession();
    const token = session?.user?.apiToken;
    const user = session?.user?._doc;

    const response = await fetch(
      process.env.NEXT_AUTH_BASE_URL +
        `/posts/all/${user?._id}?page=${page}&limit=10`
    );

    const data = await response.json();

    if (data?.acknowledgement) {
      return data?.data;
    }

    return null;
  } catch (error) {
    return null;
  }
};
