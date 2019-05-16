import React from 'react';
import renderer from 'react-test-renderer';

import ArtistQuestionScreen from './artist-question-screen.jsx';

import questions from '../../mocks/questions';
const mockQuestion = questions;

it(`ArtistQuestionScreen renders correctly`, () => {
  const {
    question
  } = mockQuestion;
  const tree = renderer
    .create(<ArtistQuestionScreen
      question = {question}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
