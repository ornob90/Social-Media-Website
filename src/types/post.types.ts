export type PostAvailableType = {
  type: "People" | "Private";
  subText: string;
  alt: string;
  src: string;
  isActive: boolean;
};

interface PostUser {
  _id: string;
  displayName: string;
  userName: string;
  photoUrl?: string;
}

export interface Post {
  _id: string;
  user: PostUser;
  content: string;
  images: string[];
  privacy: "public" | "private";
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  isLiked: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
