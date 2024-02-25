import { Document, Schema, Types, model, models } from "mongoose";

interface IBookmark extends Document {
  post: Types.ObjectId;
  user: Types.ObjectId;
  timestamp: Date;
}

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
