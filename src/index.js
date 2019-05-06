import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import Welcome from './components/welcome/welcome.jsx';

const App = (props) => {
  const {gameTime, errorCount} = props;

  return <Welcome
    time={gameTime}
    errorCount={errorCount}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number
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
