import 'react-native';
import React from 'react';

import {describe, test, expect} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';
import Button from '../Button';

describe('Given the Button component is loaded', () => {
  test('Then the provided title should be displayed', () => {
    render(<Button title="Hello World" />);
    expect(screen.getByRole('button', {name: 'Hello World'})).toBeOnTheScreen();
  });
});
