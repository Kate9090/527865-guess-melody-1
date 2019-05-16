import React from 'react';
import renderer from 'react-test-renderer';

import Welcome from './welcome.jsx';

import parametrs from '../../mocks/parametrs';

const mock = parametrs;


it(`renders correctly welcome screen`, () => {
  const {params} = mock;

  const tree = renderer
    .create(<Welcome param={params}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
