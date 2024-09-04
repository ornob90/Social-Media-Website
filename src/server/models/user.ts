import { Schema, Types, model, models } from "mongoose";
import { IUser } from "@/types/models.types";

const userSchema: Schema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      minlength: [3, "Username must be at least 3 characters long"],
    },
    displayName: {
      type: String,
      required: [true, "Display Name is required"],
      minlength: [3, "Display Name must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    phone: {
      type: String,
      // unique: true,
      match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
    },
    bio: {
      type: String,
      maxlength: [150, "Bio cannot be longer than 150 characters"],
    },
    photoUrl: {
      type: String,
      default: null,
    },
    commentAccess: {
      type: String,
      enum: {
        values: ["Everyone", "Friends"],
        message: 'Comment Access can only be "Everyone" or "Friends"',
      },
      default: "Everyone",
    },
    postViewAccess: {
      type: String,
      enum: {
        values: ["Everyone", "Friends"],
        message: 'Post View Access can only be "Everyone" or "Friends"',
      },
      default: "Everyone",
    },
    friendRequestAccess: {
      type: String,
      enum: {
        values: ["Everyone", "Friends"],
        message: 'Friend Request Access can only be "Everyone" or "Friends"',
      },
      default: "Everyone",
    },
  },
  { timestamps: true }
); // Add timestamps if needed

const User = models.User || model<IUser>("User", userSchema);

export default User;
