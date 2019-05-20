import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer';

import Screen from '../screen/screen.jsx';
import MistakesScreen from '../mistakes-screen/mistakes-screen.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {questions, gameParams, step, mistakes, onUserAnswer, onWelcomeScreenClick} = this.props;

    return <section>
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{
            filter: `url(#blur)`,
            transform: `rotate(-90deg) scaleY(-1)`,
            transformOrigin: `center`
          }}
          />
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <MistakesScreen mistakes={mistakes}/>
      </header>

      <Screen questions={questions}
        onUserAnswer={onUserAnswer}
        onWelcomeScreenClick={onWelcomeScreenClick}
        question={step}
        screenParams={gameParams}
        updateData={this.updateData}
        mistakes={mistakes}/>
    </section>;
  }
}

App.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    answers: PropTypes.array.isRequired,
  })).isRequired,
  gameParams: PropTypes.shape({
    gameTime: PropTypes.number.isRequired,
    maxMistakes: PropTypes.number.isRequired,
  }),
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,

  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () =>
    dispatch(ActionCreator[`INCREMENT_STEP`]()),

  onUserAnswer: (question, userAnswer, mistakes, maxMistakes) => {
    dispatch(ActionCreator[`INCREMENT_STEP`]());
    dispatch(ActionCreator[`INCREMENT_MISTAKES`](question, userAnswer, mistakes, maxMistakes));
  },
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
