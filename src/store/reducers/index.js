import { combineReducers } from 'redux';

import uiReducer from './uiReducer';

const pageReducers = combineReducers({
  // homePage: homePageReducers
});

const createRootReducer = () => combineReducers({
  ui: uiReducer,
  pages: pageReducers
});

export default createRootReducer;
