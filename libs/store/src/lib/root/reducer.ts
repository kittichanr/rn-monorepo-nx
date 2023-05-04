import { combineReducers } from '@reduxjs/toolkit';

import { horoscopeSlice } from '../horoscope/horoscope.slice';

import { RootState } from './types';

export const rootReducer = combineReducers<RootState>({
  horoscope: horoscopeSlice.reducer,
});