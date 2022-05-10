import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import commentSlice from './modules/comment';
import countrySlice from './modules/country';
import targetSlice from './modules/target';
import scrollSlice from './modules/scroll';
import boardSlice from './modules/board';

//직접만든 히스토리
export const history = createBrowserHistory();

//리듀서 만들기
const rootReducer = combineReducers({
  comment: commentSlice,
  country: countrySlice,
  target: targetSlice,
  scroll: scrollSlice,
  board: boardSlice,
  router: connectRouter(history),
});

// //미들웨어 준비
const middlewares = [routerMiddleware(history)];
const env = process.env.NODE_ENV;
if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});
