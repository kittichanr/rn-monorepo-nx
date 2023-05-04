import { configureStore } from '@reduxjs/toolkit';

import { initialRootState } from './initial';
import { rootReducer } from './reducer';

declare const process: any;

const isDevelopment = process.env.NODE_ENV === 'development';

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: isDevelopment,
  preloadedState: initialRootState,
});

export { rootStore };