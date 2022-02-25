import combineSagas from 'utils/combine-sagas.util';

const SAGAS = [];

function* rootSagas () {
  yield combineSagas(SAGAS);
}

export default rootSagas;
