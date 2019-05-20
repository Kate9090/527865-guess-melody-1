import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import Screen from './screen.jsx';

Enzyme.configure({adapter: new Adapter()});

import questions from '../../mocks/questions';
import parametrs from '../../mocks/parametrs';

const mockQuestion = questions;
const mockParams = parametrs;

it(`simulates click on welcome screen as an answer on first questions`, () =>{

  const buttonClick = jest.fn();

  const screen = mount(<Screen
    screenParams={mockParams}
    questions={mockQuestion}
    onClick={buttonClick}
    question={1}
    onUserAnswer={jest.fn}
    onWelcomeScreenClick={jest.fn}
    mistakes={0}
  />);

  const button = screen.find(`button`);

  button.simulate(`click`);
  screen.update();

  const currentQuestion = screen.question;
  expect(currentQuestion).toEqual(0);

  // const title = app.find(`.game__title`);
  // expect(title).toHaveLength(1);

  // expect(title.text().indexOf(`rock`).toBeGreaterThanOrEqual(0));
});
