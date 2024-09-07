import { User } from "./user.types";

export interface CommentInterface {
  _id: string;
  post: string;
  content: string;
  type: "comment";
  reactionFrom: User;
  reactedTo: User;
  createdAt: string;
}
