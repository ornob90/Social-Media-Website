import { Document, Schema, Types, model, models } from "mongoose";

interface IMessage extends Document {
  sender: Types.ObjectId;
  receiver: Types.ObjectId;
  message: string;
  timestamp: Date;
}

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
