import { IMessage } from "@/types/models.types";
import { Schema, Types, model, models } from "mongoose";

const messageSchema: Schema = new Schema({
  sender: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiver: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Message = models.Message || model<IMessage>("Message", messageSchema);
export default Message;
