import React from "react";
import ReactDOM from "react-dom";

import questions from './mocks/questions';

import App from './components/app/app.jsx';

const init = (gameQuestions) => {
  // const {errorCount} = gameQuestions;
  // const {time} = gameQuestions;

  ReactDOM.render(
      <App
        errorCount={gameQuestions.errorCount}
        gameTime={gameQuestions.time}
        questions={gameQuestions}
      />, document.querySelector(`.main`));
};

init(questions);

// console.log(questions.errorCount);
