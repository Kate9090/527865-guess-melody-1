import React from 'react';
import renderer from 'react-test-renderer';

import ArtistQuestionScreen from './artist-question-screen.jsx';

const mock = {
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
  ]
};

it(`ArtistQuestionScreen renders correctly`, () => {
  const {
    artist: artist,
    answers: answers,
  } = mock;
  const tree = renderer
    .create(<ArtistQuestionScreen
      artist = {artist}
      answers = {answers}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
