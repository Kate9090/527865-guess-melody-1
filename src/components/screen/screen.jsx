import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

import Welcome from '../welcome/welcome.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';


class Screen extends Component {
  constructor(props) {
    super(props);

    this._handleNumberOfScreen = this._handleNumberOfScreen.bind(this);
  }

  _handleNumberOfScreen(userAnswer) {
    const {questions, question, mistakes, screenParams} = this.props;
    const {maxMistakes} = screenParams;

    this.props.onUserAnswer(questions[question], userAnswer, mistakes, maxMistakes);
  }

  _getScreen(question) {
    if (!question) {
      const {
        onWelcomeScreenClick,
      } = this.props;

      return <Welcome
        handleGameStart={onWelcomeScreenClick}
      />;
    }


    switch (question.type) {
      case `genre`: return <GenreQuestionScreen
        question={question}
        handleSubmit={this._handleNumberOfScreen}
        key={`genre-question-screen-${question}`}
      />;

      case `artist`: return <ArtistQuestionScreen
        question={question}
        handleSubmit={this._handleNumberOfScreen}
      />;
    }

    return null;
  }

  render() {
    const {questions, question} = this.props;

    return <>
      {this._getScreen(questions[question])}
    </>;
  }
}

Screen.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    answers: PropTypes.array.isRequired,
  })).isRequired,
  screenParams: PropTypes.shape({
    gameTime: PropTypes.number.isRequired,
    maxMistakes: PropTypes.number.isRequired,
  }),
  updateData: PropTypes.func,
  question: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  isAnswerCorrect: PropTypes.bool,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  questions: state.questionsArray,
  question: state.step,
  mistakes: state.mistakes,
  screenParams: state.gameParam,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () =>
    dispatch(ActionCreator[`INCREMENT_STEP`]()),

  onUserAnswer: (question, userAnswer, mistakes, maxMistakes) => {
    dispatch(ActionCreator[`INCREMENT_STEP`]());
    dispatch(ActionCreator[`INCREMENT_MISTAKES`](question, userAnswer, mistakes, maxMistakes));
  },
});

export {Screen};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Screen);

