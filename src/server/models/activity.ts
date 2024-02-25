import { Document, Schema, Types, model, models } from "mongoose";

enum ActivityType {
  Likes = "likes",
  Comment = "comments",
  Share = "shares",
}

interface IActivity extends Document {
  user: Types.ObjectId;
  post: Types.ObjectId;
  content?: string;
  activityType: ActivityType;
}

const activitySchema: Schema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "User",
    require: true,
  },
  post: {
    type: Types.ObjectId,
    ref: "Post",
    require: true,
  },
  content: {
    type: String,
  },
  activityType: {
    type: String,
    enum: Object.values(ActivityType),
    require: true,
  },
});

const Activity =
  models.Activity || model<IActivity>("Activity", activitySchema);

export default Activity;
