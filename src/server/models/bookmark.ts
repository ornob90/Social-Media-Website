import { IBookmark } from "@/types/models.types";
import { Schema, Types, model, models } from "mongoose";

const bookmarkSchema: Schema = new Schema({
  post: {
    type: Types.ObjectId,
    ref: "Post",
    required: true,
  },
  user: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Bookmark =
  models.Bookmark || model<IBookmark>("Bookmark", bookmarkSchema);
export default Bookmark;
