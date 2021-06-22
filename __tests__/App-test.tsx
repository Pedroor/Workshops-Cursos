import React from 'react';

import {render} from '@testing-library/react-native';
import App from '../App';

describe('Render successfully', () => {
  it('renders App successfully', () => {
    const {toJSON} = render(<App />);

    expect(toJSON()).toMatchSnapshot();
  });
});
