import { createReducer } from '@reduxjs/toolkit';

import { fetchPagingDataSuccessReducer } from 'utils/data-store.util';
import { NEWS_SOURCES_INITIAL_STATE } from 'store/states/newsSourcesState';
import { NEWS_SOURCES_ACTIONS } from 'store/actions/newsSourcesAction';

export default createReducer(NEWS_SOURCES_INITIAL_STATE, {
  [NEWS_SOURCES_ACTIONS.fetchNewsSourcesData]: state => ({
    ...state,
    isFetching: true
  }),
  [NEWS_SOURCES_ACTIONS.fetchNewsSourcesDataSuccess]: fetchPagingDataSuccessReducer,
  [NEWS_SOURCES_ACTIONS.fetchNewsSourcesDataFailure]: (state, action) => ({
    ...state,
    isFetching: false,
    error: action.payload
  })
});
