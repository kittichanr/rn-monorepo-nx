
import { initialHoroscopeState } from '../horoscope/horoscope.slice';

import { RootState } from './interface';

export const initialRootState: RootState = {
  horoscope: initialHoroscopeState
};