import React from "react";
import PropTypes from 'prop-types';

import {connect} from 'react-redux';


const Welcome = (props) => {
  const {param, handleGameStart} = props;
  const {gameTime, maxMistakes} = param;

  return <section className="welcome">
    <div className="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
    </div>
    <button onClick={() => handleGameStart()} className="welcome__button"><span className="visually-hidden">Начать игру</span></button>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>За {gameTime} минут нужно ответить на все вопросы.</li>
      <li>Можно допустить {maxMistakes} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>;
};

Welcome.propTypes = {
  param: PropTypes.shape({
    gameTime: PropTypes.number.isRequired,
    maxMistakes: PropTypes.number.isRequired,
  }).isRequired,
  handleGameStart: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  param: state.gameParam,
});

export {Welcome};

export default connect(
    mapStateToProps
)(Welcome);
