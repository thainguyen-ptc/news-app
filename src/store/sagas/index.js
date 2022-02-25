import combineSagas from 'utils/combine-sagas.util';

import newsSourcesSagas from './newsSourcesSaga';
import articleFeedsSagas from './pages/home-page/articleFeedsSaga';

const SAGAS = [
  newsSourcesSagas,
  articleFeedsSagas
];

function* rootSagas () {
  yield combineSagas(SAGAS);
}

export default rootSagas;
