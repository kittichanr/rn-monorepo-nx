import React from 'react';
import { render } from '@testing-library/react-native';

import ZodiacSignList from './zodiac-sign-list';

describe('ZodiacSignList', () => {
  it('should render successfully', () => {
    const { root } = render(<ZodiacSignList />);
    expect(root).toBeTruthy();
  });
});
