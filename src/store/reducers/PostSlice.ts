import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../models/IPost';
interface PostState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postsFetching(state) {
      state.isLoading = true;
    },
    postsFetchingSuccess(state, action: PayloadAction<IPost[]>) {
      state.isLoading = false;
      state.error = '';
      state.posts = action.payload;
    },
    postsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { postsFetching, postsFetchingSuccess, postsFetchingError } =
  postSlice.actions;
export default postSlice.reducer;
