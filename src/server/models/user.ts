import { IUser } from "@/types/models.types";
import { Schema, model, models } from "mongoose";

const userSchema: Schema = new Schema<IUser>({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
  },
  phone: {
    type: String,
  },
  bio: {
    type: String,
    maxLength: 150,
  },
});

const User = models.User || model<IUser>("User", userSchema);

export default User;
