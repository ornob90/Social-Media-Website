import { createSlice } from "@reduxjs/toolkit";
import { Post } from "@/types/post.types";

export interface PostInitialState {
  posts: Post[];
  curSelectedPost: Post | null;
}

const initialState: PostInitialState = {
  posts: [],
  curSelectedPost: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPosts: (state, { payload }) => {
      return {
        ...state,
        posts: payload,
      };
    },
    addPostAtFirst: (state, { payload }) => {
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    },

    updateLikes: (state, { payload }) => {
      const { postId } = payload;

      const newPosts = state.posts.map((post) => {
        if (post._id !== postId) return post;

        const isAdd = !post.isLiked;
        return {
          ...post,
          likesCount: isAdd ? post.likesCount + 1 : post.likesCount - 1,
          isLiked: !post.isLiked,
        };
      });

      state.posts = newPosts;
    },
    updateTopRowFieldOfPostSlice: (state, { payload }) => {
      const { key, value } = payload as { key: string; value: any };
      state[key] = value;
    },
  },
});

export const {
  addPosts,
  updateLikes,
  addPostAtFirst,
  updateTopRowFieldOfPostSlice,
} = postSlice.actions;

export default postSlice.reducer;
