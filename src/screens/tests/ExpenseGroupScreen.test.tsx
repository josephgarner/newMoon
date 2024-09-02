import 'react-native';
import React from 'react';

import {describe, test, expect} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';

import ExportGroupScreen from '../ExpenseGroupScreen';

describe('Given the Expense Group Screen is rendered when the page loads', () => {
  test('Then the Add New button should be displayed', () => {
    render(<ExportGroupScreen />);
    expect(
      screen.getByRole('button', {name: 'Add New Group'}),
    ).toBeOnTheScreen();
  });
});
