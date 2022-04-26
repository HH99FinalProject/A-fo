import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

//직접만든 히스토리
export const history = createBrowserHistory();

//리듀서 만들기
const rootReducer = combineReducers({
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
