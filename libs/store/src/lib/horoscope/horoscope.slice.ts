import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { AdhZodiacSignItem } from '@rn-monorepo-nx/models';
import { RootState } from '../root/interface';

export const HOROSCOPE_FEATURE_KEY = 'horoscope';

/*
 * Update these interfaces according to your requirements.
 */
export interface HoroscopeEntity {
  id: number;
}

export interface HoroscopeState extends EntityState<HoroscopeEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
  zodiacSignItem?: AdhZodiacSignItem;
}

export const horoscopeAdapter = createEntityAdapter<HoroscopeEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchHoroscope())
 * }, [dispatch]);
 * ```
 */
export const fetchHoroscope = createAsyncThunk(
  'horoscope/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getHoroscopes()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialHoroscopeState: HoroscopeState =
  horoscopeAdapter.getInitialState({
    loadingStatus: 'not loaded',
    error: null,
  });

export const horoscopeSlice = createSlice({
  name: HOROSCOPE_FEATURE_KEY,
  initialState: initialHoroscopeState,
  reducers: {
    add: horoscopeAdapter.addOne,
    remove: horoscopeAdapter.removeOne,
    setUserZodiacSignItem: (state: HoroscopeState, action: PayloadAction<AdhZodiacSignItem>) => {
      state.zodiacSignItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHoroscope.pending, (state: HoroscopeState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchHoroscope.fulfilled,
        (state: HoroscopeState, action: PayloadAction<HoroscopeEntity[]>) => {
          horoscopeAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchHoroscope.rejected, (state: HoroscopeState, action) => {
        state.loadingStatus = 'error';
        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const horoscopeReducer = horoscopeSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(horoscopeActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const horoscopeActions = horoscopeSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllHoroscope);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */

const { selectAll, selectEntities } = horoscopeAdapter.getSelectors();

export const getHoroscopeState = (rootState: RootState): HoroscopeState =>
  rootState[HOROSCOPE_FEATURE_KEY];

export const selectAllHoroscope = createSelector(getHoroscopeState, selectAll);

export const selectHoroscopeEntities = createSelector(
  getHoroscopeState,
  selectEntities
);
