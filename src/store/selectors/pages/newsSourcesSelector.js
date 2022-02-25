import { createSelector } from 'reselect';

export const getNewsSourcesState = state => state.newsSources;

export const getWhetherNewsSourcesLoading = createSelector(
  getNewsSourcesState,
  state => state.isFetching
);

export const getNewsSourcesData = createSelector(
  getNewsSourcesState,
  state => state.data
);

export const getNewsSourcesPagingInfo = createSelector(
  getNewsSourcesState,
  state => state.pagingInfo
);

export const getWhetherNewsSourcesCouldBeLoadedMore = createSelector(
  getNewsSourcesPagingInfo,
  ({ currentPage, totalPages }) => currentPage < totalPages
);
