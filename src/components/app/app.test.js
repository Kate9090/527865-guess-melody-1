import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

import questions from '../../mocks/questions';
import parametrs from '../../mocks/parametrs';

const mockQuestion = questions;
const mockParams = parametrs;

it(`renders correctly app screen`, () => {
  const tree = renderer
    .create(<App
      gameParams={mockParams}
      questions={mockQuestion}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
