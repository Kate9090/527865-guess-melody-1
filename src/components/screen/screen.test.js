import React from 'react';
import renderer from 'react-test-renderer';

import {Screen} from './screen.jsx';

import {Provider} from 'react-redux';
import {reducer} from '../../reducer';
import {createStore} from 'redux';

const store = createStore(reducer);

import questions from '../../mocks/questions';
import parametrs from '../../mocks/parametrs';

const mockQuestion = questions;
const mockParams = parametrs;


it(`renders correctly screens`, () => {
  const tree = renderer
    .create(<Provider store={store}><Screen
      screenParams={mockParams}
      questions={mockQuestion}
      question={-1}
      onUserAnswer={jest.fn}
      onWelcomeScreenClick={jest.fn}
      mistakes={0}

    /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
