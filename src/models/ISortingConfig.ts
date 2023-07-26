import { IPost } from './IPost';

export interface ISortConfig {
  key: keyof IPost | null;
  direction: 'ascending' | 'descending' | null;
}
