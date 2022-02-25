import combineSagas from 'utils/combine-sagas.util';

import articleFeedsSagas from './pages/home-page/articleFeedsSaga';

const SAGAS = [
  articleFeedsSagas
];

function* rootSagas () {
  yield combineSagas(SAGAS);
}

export default rootSagas;
