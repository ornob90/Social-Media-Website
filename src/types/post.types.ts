export type PostAvailableType = {
  type: "People" | "Private";
  subText: string;
  alt: string;
  src: string;
  isActive: boolean;
};

export interface Post {
  _id: string;
  user: string;
  content: string;
  images: string[];
  privacy: "public" | "private";
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  createdAt?: Date;
  updatedAt?: Date;
}
