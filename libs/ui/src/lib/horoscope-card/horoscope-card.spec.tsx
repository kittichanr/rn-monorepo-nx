import React from 'react';
import { render } from '@testing-library/react-native';

import HoroscopeCard from './horoscope-card';

describe('HoroscopeCard', () => {
  it('should render successfully', () => {
    const { root } = render(<HoroscopeCard />);
    expect(root).toBeTruthy();
  });
});
