import { all, call, put, takeLatest } from 'redux-saga/effects';

import ArticleService from 'services/articleService';
import { NEWS_SOURCES_ACTION_TYPES } from 'store/actions/newsSourcesAction';

const articleService = new ArticleService();

function* fetchNewsSourcesDataSaga () {
  try {
    const responseData = yield call(articleService.fetchTopHeadlinesResources);

    return yield put({
      type: NEWS_SOURCES_ACTION_TYPES.FETCH_NEWS_SOURCES_DATA_SUCCESS,
      payload: responseData
    });
  } catch (err) {
    return yield put({
      type: NEWS_SOURCES_ACTION_TYPES.FETCH_NEWS_SOURCES_DATA_FAILURE,
      payload: err
    });
  }
}

function* newsSourcesSagas () {
  yield all([
    takeLatest(NEWS_SOURCES_ACTION_TYPES.FETCH_NEWS_SOURCES_DATA, fetchNewsSourcesDataSaga)
  ]);
}

export default newsSourcesSagas;
