import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audioplayer.jsx';

const mock = {
  question: {
    type: `artist`,
    genre: `rock`,
    song: {
      artist: `Пелагея`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
    },
    answers: [
      {
        img: `path`,
        genre: `rock`,
      },
      {
        img: `path`,
        genre: `rock`,
      },
      {
        img: `path`,
        genre: `rock`,
      },
    ],
  },
};


it(`AudioPlayer renders correctly`, () => {
  const {
    question
  } = mock;
  const tree = renderer
    .create(<AudioPlayer
      src={question.song.src}
      onPlayButtonClick = {() => {
        question.song.genre = `blues`;
      }
      }
      isPlaying
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

