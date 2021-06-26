import React from 'react';

import { render } from '@testing-library/react-native';
import { UserIdentification } from '../src/pages/UserIdentification';
import MockedNavigator from '../src/utils/MockedNavigator';

describe('Render successfully', () => {
  it('renders UserIdentification-Screen successfully', () => {
    const { toJSON } = render(<UserIdentification />);

    expect(toJSON()).toMatchSnapshot();
  });
});
