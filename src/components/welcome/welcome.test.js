import React from 'react';
import renderer from 'react-test-renderer';

import Welcome from './welcome.jsx';

it(`renders correctly welcome screen`, () => {
  const tree = renderer
    .create(<Welcome />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
