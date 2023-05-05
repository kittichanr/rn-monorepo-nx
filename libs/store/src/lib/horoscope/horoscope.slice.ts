import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { AdhHoroscopeDay, AdhZodiacSignItem, AdhHoroscope, AdhZodiacSign, transfromAztroHoroscpeResponseToAdhHoroscope, LoadingStatus } from '@rn-monorepo-nx/models';
import { RootState } from '../root/types';
import { aztroService } from '@rn-monorepo-nx/services';

export const HOROSCOPE_FEATURE_KEY = 'horoscope';

/*
 * Update these interfaces according to your requirements.
 */
export interface HoroscopeEntity {
  id: number;
}

export interface HoroscopeState extends EntityState<HoroscopeEntity> {
  loadingStatus: LoadingStatus;
  error: string | null;
  zodiacSignItem?: AdhZodiacSignItem;
  day?: AdhHoroscopeDay;
  horoscope?: AdhHoroscope;
}

export const horoscopeAdapter = createEntityAdapter<HoroscopeEntity>();


export const fetchHoroscope = createAsyncThunk<
  AdhHoroscope,
  { zodiacSign: AdhZodiacSign, day: AdhHoroscopeDay }
>('horoscope/fetchStatus', async ({ zodiacSign, day }, { rejectWithValue }) => {
  try {
    const horoscopeResponse = await aztroService.getHoroscope(zodiacSign, day);
    return transfromAztroHoroscpeResponseToAdhHoroscope(horoscopeResponse);
  } catch (error) {
    return rejectWithValue({ error });
  }
});

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
        (state: HoroscopeState, action: PayloadAction<AdhHoroscope>) => {
          state.horoscope = action.payload;
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

export const horoscopeReducer = horoscopeSlice.reducer;

export const horoscopeActions = { fetchHoroscope, ...horoscopeSlice.actions };

const { selectAll, selectEntities } = horoscopeAdapter.getSelectors();

export const getHoroscopeState = (rootState: RootState): HoroscopeState =>
  rootState[HOROSCOPE_FEATURE_KEY];

const getUserZodiacItem = (
  rootState: RootState
): AdhZodiacSignItem | undefined => getHoroscopeState(rootState).zodiacSignItem;

const getUserZodiac = (
  rootState: RootState
): AdhZodiacSign | undefined => getUserZodiacItem(rootState)?.zodiacSign;

const getUserHoroscope = (rootState: RootState): AdhHoroscope | undefined =>
  getHoroscopeState(rootState).horoscope;

const getHoroscopeLoadingStatus = (rootState: RootState): LoadingStatus =>
  getHoroscopeState(rootState).loadingStatus;

export const horoscopeSelectors = { getUserZodiacItem, getUserZodiac, getUserHoroscope, getHoroscopeLoadingStatus };

export const selectAllHoroscope = createSelector(getHoroscopeState, selectAll);

export const selectHoroscopeEntities = createSelector(
  getHoroscopeState,
  selectEntities
);