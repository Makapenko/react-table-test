import { IPost } from './IPost';

export interface IColumn {
  key: keyof IPost;
  label: string;
}
