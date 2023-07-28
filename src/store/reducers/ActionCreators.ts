import axios from 'axios';
import { IPost } from '../../models/IPost';
import { AppDispatch } from '../store';
import { postSlice } from './PostSlice';

export const fetchPosts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(postSlice.actions.postsFetching())
    const response = await axios.get<IPost[]>(
      'https://jsonplaceholder.typicode.com/posts', {
        params: {_limit: 50}
      }
    );
    dispatch(postSlice.actions.postsFetchingSuccess(response.data))
  } catch (e) {
    dispatch(postSlice.actions.postsFetchingError((e as Error).message))
  }
};
