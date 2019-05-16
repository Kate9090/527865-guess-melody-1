import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

import questions from '../../mocks/questions';
import parametrs from '../../mocks/parametrs';

const mockQuestion = questions;
const mockParams = parametrs;

it(`renders correctly welcome screen`, () => {
  const {question} = mockQuestion;
  const {param} = mockParams;
  const tree = renderer
    .create(<App
      gameParams={param}
      questions={question}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
