import React from "react";
import ReactDOM from "react-dom";

import questions from './mocks/questions';
import params from './mocks/parametrs';

import App from './components/app/app.jsx';

const init = (gameQuestions, gameParametrs) => {

  ReactDOM.render(
      <App
        gameParams={gameParametrs}
        questions={gameQuestions}
      />, document.querySelector(`.main`));
};

init(questions, params);
