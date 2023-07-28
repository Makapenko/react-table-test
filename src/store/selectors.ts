import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const postsSelector = (state: RootState) => state.postReducer.posts;

export const sortBySelector = (state: RootState) => state.sortReducer.sortBy;
export const sortDirectionSelector = (state: RootState) =>
  state.sortReducer.sortDirection;
export const currentPageSelector = (state: RootState) =>
  state.sortReducer.currentPage;
export const searchQuerySelector = (state: RootState) =>
  state.sortReducer.searchQuery;

const postsPerPage = 10;

// Страницы
export const postSelector = createSelector(
  [postsSelector, currentPageSelector],
  (posts, currentPage) => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsOnPage = posts.slice(startIndex, endIndex);

    return postsOnPage;
  }
);

// Сортировка
export const sortedPostsSelector = createSelector(
  [postSelector, sortBySelector, sortDirectionSelector],
  (posts, sortBy, sortDirection) => {
    const sortedPosts = [...posts].sort((a, b) => {
      const valueA = a[sortBy];
      const valueB = b[sortBy];
      if (valueA < valueB) {
        return sortDirection === 'ascending' ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortDirection === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    return sortedPosts;
  }
);

// Поиск
export const filteredPostsSelector = createSelector(
  [sortedPostsSelector, searchQuerySelector],
  (posts, searchQuery) => {
    const filteredPosts = searchQuery
      ? posts.filter(
          (post) =>
            post.id.toString().includes(searchQuery) ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.body.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : posts;

    return filteredPosts;
  }
);
