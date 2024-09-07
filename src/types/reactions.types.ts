export interface CommentInterface {
  _id: string;
  user?: string;
  post: string;
  content: string;
  type: "comment";
}
