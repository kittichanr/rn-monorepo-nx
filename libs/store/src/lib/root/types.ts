import { rootStore } from '.';
import { HoroscopeState } from '../horoscope/horoscope.slice';

export interface RootState {
    horoscope: HoroscopeState;
}

export type AppDispatch = typeof rootStore.dispatch
