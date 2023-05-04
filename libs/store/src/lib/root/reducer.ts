import { combineReducers } from '@reduxjs/toolkit';

import { horoscopeSlice } from '../horoscope/horoscope.slice';

import { RootState } from './interface';

export const rootReducer = combineReducers<RootState>({
  horoscope: horoscopeSlice.reducer,
});