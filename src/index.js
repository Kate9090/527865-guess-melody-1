import React from "react";
import ReactDOM from "react-dom";

import questions from './mocks/questions';

import App from './components/app/app.jsx';

const init = (gameQuestions) => {

  ReactDOM.render(
      <App
        questions={gameQuestions}
      />, document.querySelector(`.main`));
};

init(questions);
