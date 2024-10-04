import { IPost } from "./IPost";

export interface IPostState {
  posts: IPost[];
  status: string;
  error: string;
}
