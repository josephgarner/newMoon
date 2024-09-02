import 'react-native';
import React from 'react';

import {describe, test, expect} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';
import Paper from '../Paper';

describe('Given the Paper component is loaded', () => {
  describe('When the height is set to 100', () => {
    test('Then a Paper container should be displayed with maxHeight of 100', () => {
      render(<Paper height={100} testID="container" />);
      expect(screen.getByTestId('container')).toHaveStyle({
        maxHeight: 100,
      });
    });
  });
  describe('When no height is set', () => {
    test('Then a Paper container should be displayed with maxHeight of auto', () => {
      render(<Paper testID="container" />);
      expect(screen.getByTestId('container')).toHaveStyle({
        maxHeight: 'auto',
      });
    });
  });
});
