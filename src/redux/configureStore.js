import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from "redux-logger";
import { createBrowserHistory } from 'history';
import { History } from 'history';




export default configureStore({
  reducer: {


  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})


