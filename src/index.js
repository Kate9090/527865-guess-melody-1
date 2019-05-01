import React from "react";
import ReactDOM from "react-dom";

import Welcome from './components/welcome/welcome';

const App = () => {
  // const {gameTime, errorCount} = props;

  return <Welcome
    // time={gameTime}
    // errorCount={errorCount}
  />;
};

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
  };
  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime
        }/>, document.querySelector(`.main`));
};

init();
