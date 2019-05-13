import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import Screen from './screen.jsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  questions: [
    {
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
          src: `path`,
          genre: `jazz`,
        },
        {
          src: `path`,
          genre: `blues`,
        },
        {
          src: `path`,
          genre: `rock`,
        },
      ],
    },
  ]
};

it(`simulates click on welcome screen as an answer on first questions`, () =>{
  const {questions} = mock;
  const buttonClick = jest.fn();

  const screen = mount(<Screen
    gameTime={0}
    errorCount={0}
    questions={questions}
    onClick={buttonClick}
  />);

  const button = screen.find(`button`);

  button.simulate(`click`);
  screen.update();

  const currentQuestion = screen.state(`question`);
  expect(currentQuestion).toEqual(0);

  // const title = app.find(`.game__title`);
  // expect(title).toHaveLength(1);

  // expect(title.text().indexOf(`rock`).toBeGreaterThanOrEqual(0));
});
