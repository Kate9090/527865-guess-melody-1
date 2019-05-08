import React from 'react';
import renderer from 'react-test-renderer';

import ArtistQuestionScreen from './artist-question-screen.jsx';

const mock = {
  question: {
    artist: `Пелагея`,
    answers: [
      {
        artist: `Пелагея`,
        src: ``,
      },
      {
        artist: `Пелагея`,
        src: ``,
      },
      {
        artist: `Пелагея`,
        src: ``,
      },
    ],
  },
};

it(`ArtistQuestionScreen renders correctly`, () => {
  const {
    question
  } = mock;
  const tree = renderer
    .create(<ArtistQuestionScreen
      question = {question}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
