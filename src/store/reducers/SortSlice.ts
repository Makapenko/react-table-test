import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../models/IPost';

type SortDirection = 'ascending' | 'descending';

interface SortState {
  sortBy: keyof IPost;
  sortDirection: SortDirection;
  currentPage: number;
  searchQuery: string;
}

const initialState: SortState = {
  sortBy: 'id',
  sortDirection: 'ascending',
  currentPage: 1,
  searchQuery: '',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    updateSort(
      state,
      action: PayloadAction<{
        sortBy: keyof IPost;
        sortDirection: SortDirection;
      }>
    ) {
      const { sortBy, sortDirection } = action.payload;

      return {
        ...state,
        sortBy,
        sortDirection,
      };
    },
    changePage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    changeSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});
export const { updateSort, changePage, changeSearchQuery } =
sortSlice.actions;

export default sortSlice.reducer;
