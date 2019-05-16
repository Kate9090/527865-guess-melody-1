import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionScreen from './genre-question-screen.jsx';

import questions from '../../mocks/questions';
const mockQuestion = questions[0];

it(`GenreQuestionScreen renders correctly`, () => {

  const tree = renderer
    .create(<GenreQuestionScreen
      question = {mockQuestion}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

