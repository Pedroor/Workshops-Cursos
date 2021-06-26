import React from 'react';

import { render } from '@testing-library/react-native';
import { Confirmation } from '../src/pages/Confirmation';

describe('Render successfully', () => {
  it('renders Confirmatiion-Screen successfully', () => {
    const { toJSON } = render(<Confirmation />);

    expect(toJSON()).toMatchSnapshot();
  });
});
