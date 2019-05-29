import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import AudioPlayer from './audioplayer.jsx';

import questions from '../../mocks/questions';
const question = questions;
// const srcSong = question[1].song.src;

Enzyme.configure({adapter: new Adapter()});


it(`simulates click on welcome screen as an answer on first questions`, () =>{
  // const {src} = srcSong;
  const buttonClickPlay = jest.fn();

  const player = mount(<AudioPlayer
    src={question[1].song.src}
    isPlaying
    onPlayButtonClick = {buttonClickPlay}
  />);

  const button = player.find(`button`);

  button.simulate(`click`);
  player.update();

  const currentPlayState = player.state(`isPlaying`);
  expect(currentPlayState).toEqual(true);

});
