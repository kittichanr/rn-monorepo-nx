import { configureStore } from '@reduxjs/toolkit';

import { initialRootState } from './initialState';
import { rootReducer } from './reducer';
import logger from 'redux-logger';

declare const process: any;

const isDevelopment = process.env.NODE_ENV === 'development';

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => isDevelopment ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
  devTools: isDevelopment,
  preloadedState: initialRootState,
});

export { rootStore };