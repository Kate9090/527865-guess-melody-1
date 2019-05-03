import React from 'react';
import renderer from 'react-test-renderer';

import App from './index';

it(`renders correctly welcome screen`, () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
