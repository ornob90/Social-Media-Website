import { IPost } from "@/types/models.types";
import { Schema, Types, model, models } from "mongoose";

const postSchema: Schema = new Schema({
  user: {
    type: Types.ObjectId,
    required: true,
    ref: "User",
  },
  content: {
    type: String,
    required: true,
    minLength: 5,
  },
  imgUrl: {
    type: String,
  },
  likesCount: {
    type: Number,
    default: 0,
  },
  commentCount: {
    type: Number,
    default: 0,
  },
  shareCount: {
    type: Number,
    default: 0,
  },
});

const Post = models.Post || model<IPost>("Post", postSchema);

export default Post;
