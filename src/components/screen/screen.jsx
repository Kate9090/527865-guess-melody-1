import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

    // console.log(`mistakes = ` + mistakes);

    this.props.onUserAnswer(questions[question], userAnswer, mistakes, maxMistakes);
  }

  _getScreen(question) {
    if (!question) {
      const {
        screenParams, onWelcomeScreenClick,
      } = this.props;

      return <Welcome
        param={screenParams}
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

    return <section>
      {this._getScreen(questions[question])}
    </section>;
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

export default Screen;
