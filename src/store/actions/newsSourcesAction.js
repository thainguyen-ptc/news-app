import { createAction } from '@reduxjs/toolkit';

export const NEWS_SOURCES_ACTION_TYPES = {
  FETCH_NEWS_SOURCES_DATA:
    '[NEWS_SOURCES_DATA_STATE] - FETCH_NEWS_SOURCES_DATA',
  FETCH_NEWS_SOURCES_DATA_SUCCESS:
    '[NEWS_SOURCES_DATA_STATE] - FETCH_NEWS_SOURCES_DATA_SUCCESS',
  FETCH_NEWS_SOURCES_DATA_FAILURE:
    '[NEWS_SOURCES_DATA_STATE] - FETCH_NEWS_SOURCES_DATA_FAILURE'
};

export const NEWS_SOURCES_ACTIONS = {
  fetchNewsSourcesData: createAction(
    NEWS_SOURCES_ACTION_TYPES.FETCH_NEWS_SOURCES_DATA
  ),
  fetchNewsSourcesDataSuccess: createAction(
    NEWS_SOURCES_ACTION_TYPES.FETCH_NEWS_SOURCES_DATA_SUCCESS,
    responseData => ({
      payload: responseData
    })
  ),
  fetchNewsSourcesDataFailure: createAction(
    NEWS_SOURCES_ACTION_TYPES.FETCH_NEWS_SOURCES_DATA_FAILURE,
    errorDescription => ({
      payload: errorDescription
    })
  )
};
