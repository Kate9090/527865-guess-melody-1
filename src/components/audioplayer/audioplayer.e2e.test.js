import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import AudioPlayer from './audioplayer.jsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `genre`,
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

it(`simulates click on welcome screen as an answer on first questions`, () =>{
  const {question} = mock;
  const buttonClickPlay = jest.fn();

  const player = mount(<AudioPlayer
    src={question.song.src}
    isPlaying
    onPlayButtonClick = {buttonClickPlay}
  />);

  const button = player.find(`button`);

  button.simulate(`click`);
  player.update();

  const currentPlayState = player.state(`isPlaying`);
  expect(currentPlayState).toEqual(true);

  // const title = app.find(`.game__title`);
  // expect(title).toHaveLength(1);

  // expect(title.text().indexOf(`rock`).toBeGreaterThanOrEqual(0));
});
