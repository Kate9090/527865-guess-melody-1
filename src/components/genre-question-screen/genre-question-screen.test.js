import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionScreen from './genre-question-screen.jsx';

import questions from '../../mocks/questions';
const mockQuestion = questions;

it(`GenreQuestionScreen renders correctly`, () => {
  const {
    question
  } = mockQuestion;
  const tree = renderer
    .create(<GenreQuestionScreen
      question = {question}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

