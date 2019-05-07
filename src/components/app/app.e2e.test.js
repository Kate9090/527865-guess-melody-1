import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import App from './app.jsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
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
    // {
    //   type: `artist`,
    //   artist: `rock`,
    //   answers: [
    //     {
    //       src: `path`,
    //       artist: `Пелагея`,
    //     },
    //   ],
    // }
  ]
};

it(`simulates click on welcome screen as an answer on first questions`, () =>{
  const {questions} = mock;
  const buttonClick = jest.fn();

  const app = mount(<App
    times={0}
    errorCount={0}
    questions={questions}
    onClick={buttonClick}
  />);

  const button = app.find(`button`);

  button.simulate(`click`);
  app.update();

  const title = app.find(`.game__title`);
  expect(title).toHaveLength(1);

  expect(title.text().indexOf(`rock`).toBeGreaterThanOrEqual(0));
});
