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
  },
});

export const { addCommentsOfPost } = reactionsSlice.actions;

export default reactionsSlice.reducer;
