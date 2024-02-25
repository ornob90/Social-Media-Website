import { Document, Schema, Types, model, models } from "mongoose";

interface IPost extends Document {
  user: Types.ObjectId;
  content: string;
  imgUrl?: string;
  likesCount: number;
  commentCount: number;
  shareCount: number;
}

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

export const Post = models.Post || model<IPost>("Post", postSchema);
