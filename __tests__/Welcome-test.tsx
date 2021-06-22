import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Welcome } from '../src/pages/Welcome';

describe('Render successfully', () => {
  it('renders Welcome-Screen successfully', () => {
    const { toJSON } = render(<Welcome />);

    expect(toJSON()).toMatchSnapshot();
  });
});
