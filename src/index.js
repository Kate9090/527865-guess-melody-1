import React from "react";
import ReactDOM from "react-dom";

import questions from './mocks/questions';

import App from './components/app/app.jsx';

const init = (gameQuestions) => {
  const {errorCount} = gameQuestions[0][`errorCount`];
  const {time} = gameQuestions[0][`gameTime`];

  ReactDOM.render(
      <App
        errorCount={errorCount}
        gameTime={time}
        questions={gameQuestions}
      />, document.querySelector(`.main`));
};

init(questions);
