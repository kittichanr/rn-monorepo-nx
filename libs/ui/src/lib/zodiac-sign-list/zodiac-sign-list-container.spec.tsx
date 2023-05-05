import React from 'react';
import { render } from '@testing-library/react-native';

import {ZodiacSignListContainer} from './zodiac-sign-list-container';

describe('ZodiacSignListContainer', () => {
  it('should render successfully', () => {
    const { root } = render(<ZodiacSignListContainer />);
    expect(root).toBeTruthy();
  });
});
