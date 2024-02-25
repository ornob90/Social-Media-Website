// Import required modules
import mongoose, { Document, Schema, model, models } from "mongoose";

interface IFollow extends Document {
  following: mongoose.Types.ObjectId;
  follower: mongoose.Types.ObjectId;
  timestamp: Date;
}

const followSchema: Schema = new Schema({
  following: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  follower: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Follow = models.Follow || model<IFollow>("Follow", followSchema);
export default Follow;
