import { combineReducers } from 'redux';

import newsSourcesReducer from './newsSourcesReducer';
import uiReducer from './uiReducer';
import homePageReducers from './pages/home-page';

const pageReducers = combineReducers({
  homePage: homePageReducers
});

const createRootReducer = () => combineReducers({
  newsSources: newsSourcesReducer,
  ui: uiReducer,
  pages: pageReducers
});

export default createRootReducer;
