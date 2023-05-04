
import { initialHoroscopeState } from '../horoscope/horoscope.slice';

import { RootState } from './types';

export const initialRootState: RootState = {
  horoscope: initialHoroscopeState
};