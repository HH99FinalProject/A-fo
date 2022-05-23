import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import commentSlice from './modules/comment';
import countrySlice from './modules/country';
import targetSlice from './modules/target';
import boardSlice from './modules/board';
import image from './modules/image';
import loginSlice from './modules/login';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  comment: commentSlice.reducer,
  country: countrySlice.reducer,
  target: targetSlice.reducer,
  board: boardSlice.reducer,
  login: loginSlice.reducer,
  image: image,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['target', 'country', 'login'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [routerMiddleware(history)];
const env = process.env.NODE_ENV;
if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(...middlewares),
});
