import { User } from "./user.types";

export type PostAvailableType = {
  type: "People" | "Private";
  subText: string;
  alt: string;
  src: string;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLElement> | undefined;
};

export interface Post {
  _id: string;
  user: User;
  content: string;
  images: string[];
  privacy: "public" | "private";
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  isLiked: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  sharedPostId: Post;
}

export interface SavedPost {
  user: string;
  content: string;
  images?: string[];
  sharedPostId?: string;
}
