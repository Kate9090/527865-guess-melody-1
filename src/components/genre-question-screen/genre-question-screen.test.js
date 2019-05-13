import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionScreen from './genre-question-screen.jsx';

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    gameTime: 0,
    errorCount: 0,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
      {
        genre: `blues`,
        src: ``,
      },
      {
        genre: `jazz`,
        src: ``,
      },
      {
        genre: `jazz`,
        src: ``,
      },
    ],
  },
};


it(`GenreQuestionScreen renders correctly`, () => {
  const {
    question
  } = mock;
  const tree = renderer
    .create(<GenreQuestionScreen
      question = {question}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

