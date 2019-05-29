import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audioplayer.jsx';

import questions from '../../mocks/questions';
const question = questions;
// const srcSong = question[0].answers[0].src;

it(`AudioPlayer renders correctly`, () => {
  // const {src} = srcSong;

  const tree = renderer
    .create(<AudioPlayer
      src={question[0].answers[0].src}
      onPlayButtonClick = {() => {
        question.song.genre = `blues`;
      }
      }
      isPlaying
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

