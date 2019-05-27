import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';


import {Provider} from 'react-redux';
import {reducer} from '../../reducer';
import {createStore} from 'redux';

const store = createStore(reducer);

// import questions from '../../mocks/questions';
// import parametrs from '../../mocks/parametrs';

// const mockQuestion = questions;
// const mockParams = parametrs;

it(`renders correctly app screen`, () => {
  const tree = renderer
    .create(<Provider store={store}><App
      // gameParams={mockParams}
      // questions={mockQuestion}
      question={1}
      onUserAnswer={jest.fn}
      onWelcomeScreenClick={jest.fn}
      mistakes={0}
      step={0}
    /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
