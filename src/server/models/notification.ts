import { INotification } from "@/types/models.types";
import mongoose, { Document, Schema, model, models } from "mongoose";

const notificationSchema: Schema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  isRead: { type: Boolean, default: false },
  message: { type: String, required: true },
});

const Notification =
  models.Notification ||
  model<INotification>("Notification", notificationSchema);
export default Notification;
