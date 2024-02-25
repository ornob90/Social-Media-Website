import mongoose, { Document, Schema, model, models } from "mongoose";

interface INotification extends Document {
  userId: mongoose.Types.ObjectId;
  isRead: boolean;
  message: string;
}

const notificationSchema: Schema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  isRead: { type: Boolean, default: false },
  message: { type: String, required: true },
});

const Notification =
  models.Notification ||
  model<INotification>("Notification", notificationSchema);
export default Notification;
