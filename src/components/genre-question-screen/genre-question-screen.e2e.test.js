import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import GenreQuestionScreen from './genre-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

import questions from '../../mocks/questions';
const mockQuestion = questions[0];

it(`simulates chose checkbox on GenreQuestionScreen as an answer on the questions about genre`, () =>{

  const onButtonSubmit = jest.fn();
  const formSendPrevention = jest.fn();
  const genreQuestion = mount(<GenreQuestionScreen
    handleSubmit={onButtonSubmit}
    question={mockQuestion}
  />);

  const form = genreQuestion.find(`form`);
  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });
  expect(onButtonSubmit).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});
