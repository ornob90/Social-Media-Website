import { createSlice } from "@reduxjs/toolkit";
import { CommentInterface } from "../../types/reactions.types";

export interface ReactionInitialState {
  comments: {
    [key: string]: CommentInterface[];
  };
}

const initialState: ReactionInitialState = {
  comments: {},
};

const reactionsSlice = createSlice({
  name: "reactions",
  initialState,
  reducers: {
    addCommentsOfPost: (state, { payload }) => {
      const { postId, comments } = payload;
      state.comments[postId] = comments;
    },
    addCommentToPost: (state, { payload }) => {
      const { postId, comment } = payload;
      state.comments[postId].unshift(comment);
    },
    updateCommentByIndex: (state, { payload }) => {
      const { commentIndex, postId, content } = payload;
      state.comments[postId] = state.comments[postId].map((comment, idx) => {
        if (idx !== commentIndex) return comment;

        return {
          ...comment,
          content,
        };
      });
    },
    removeFirstCommentOfPost: (state, { payload }) => {
      const { postId } = payload;

      // removing first element of array using shift method
      state.comments[postId].shift();
    },
    // ? IT'S NOT BY ID. IT'S BY INDEX.
    removeCommentById: (state, { payload }) => {
      const { postId, commentIndex } = payload;

      state.comments[postId] = state.comments[postId].filter(
        (comment, idx) => idx !== commentIndex
      );
    },
  },
});

export const {
  addCommentsOfPost,
  addCommentToPost,
  updateCommentByIndex,
  removeFirstCommentOfPost,
  removeCommentById,
} = reactionsSlice.actions;

export default reactionsSlice.reducer;
