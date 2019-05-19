import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer';

import Screen from '../screen/screen.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   mistakes: 0,
    // };
  }

  // updateData(value) {
  //   this.setState({mistakes: value});
  // }

  render() {
    const {questions, gameParams, step, mistakes, onUserAnswer} = this.props;

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

        <div className="game__mistakes">
          {new Array(mistakes).map((i) =>
            <div className="wrong" key={i}></div>
          )}
        </div>
      </header>

      <Screen questions={questions}
        onUserAnswer={onUserAnswer} question={step} screenParams={gameParams} updateData={this.updateData}/>

    </section>;
  }
}

App.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    answers: PropTypes.array.isRequired,

  })).isRequired,
  gameParams: PropTypes.shape({
    gameTime: PropTypes.number.isRequired,
    errorCount: PropTypes.number.isRequired,
  }),
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer: (question, userAnswer) => {

    dispatch(ActionCreator[`INCREMENT_STEP`](question, userAnswer));
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
