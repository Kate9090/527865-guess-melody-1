import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionScreen from './genre-question-screen.jsx';

const mock = {
  genre: `rock`,
  answers: [
    {
      genre: `rock`,
      src: ``,
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
  ]
};

it(`GenreQuestionScreen renders correctly`, () => {
  const {
    genre: genre,
    answers: answers,
  } = mock;
  const tree = renderer
    .create(<GenreQuestionScreen
      genre = {genre}
      answers = {answers}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

