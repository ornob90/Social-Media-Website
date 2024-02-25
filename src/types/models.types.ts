import { Document, Types } from "mongoose";

// Enum for ActivityType
export enum ActivityType {
  Likes = "likes",
  Comment = "comments",
  Share = "shares",
}

// User Model
export interface IUser extends Document {
  userName: string;
  displayName: string;
  password: string;
  email: string;
  photoUrl?: string;
  phone?: string;
  bio?: string;
}

// Post Model
export interface IPost extends Document {
  user: Types.ObjectId;
  content: string;
  imgUrl?: string;
  likesCount: number;
  commentCount: number;
  shareCount: number;
}

// Follow Model
export interface IFollow extends Document {
  following: Types.ObjectId;
  follower: Types.ObjectId;
  timestamp: Date;
}

// Message Model
export interface IMessage extends Document {
  sender: Types.ObjectId;
  receiver: Types.ObjectId;
  message: string;
  timestamp: Date;
}

// Activity Model
export interface IActivity extends Document {
  user: Types.ObjectId;
  post: Types.ObjectId;
  content?: string;
  activityType: ActivityType;
}

// Notification Model
export interface INotification extends Document {
  userId: Types.ObjectId;
  isRead: boolean;
  message: string;
}

// Bookmark Model
export interface IBookmark extends Document {
  post: Types.ObjectId;
  user: Types.ObjectId;
  timestamp: Date;
}
