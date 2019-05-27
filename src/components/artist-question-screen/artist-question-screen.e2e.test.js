import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import ArtistQuestionScreen from './artist-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

import questions from '../../mocks/questions';
const mockQuestion = questions[1];

it(`should call callback by clicking on answer`, () => {
  const handleSubmit = jest.fn();
  const wrapper = mount(
      <ArtistQuestionScreen
        question={mockQuestion}
        handleSubmit={handleSubmit} />
  );

  wrapper.find(`.artist__input`).at(0).simulate(`change`);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
