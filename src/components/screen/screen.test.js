import React from 'react';
import renderer from 'react-test-renderer';

import Screen from './screen.jsx';

import questions from '../../mocks/questions';
import parametrs from '../../mocks/parametrs';

const mockQuestion = questions;
const mockParams = parametrs;

it(`renders correctly welcome screen`, () => {
  const {question} = mockQuestion;
  const {param} = mockParams;
  const tree = renderer
    .create(<Screen
      screenParams={param}
      questions={question}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
