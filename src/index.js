import React from "react";
import ReactDOM from "react-dom";

import questions from './mocks/questions';
import params from './mocks/parametrs';

import {Provider} from 'react-redux';
import {reducer} from './reducer';
import {createStore} from 'redux';

import App from './components/app/app.jsx';

const store = createStore(reducer);

const init = (gameQuestions, gameParametrs) => {

  ReactDOM.render(<Provider store={store}>
    <App
      gameParams={gameParametrs}
      questions={gameQuestions}
    />
  </Provider>, document.querySelector(`.main`));
};

init(questions, params);
