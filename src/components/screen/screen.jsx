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
    const {questions, question, isAnswerCorrect, onUserAnswer} = this.props;
    const {step} = question;


    if (isAnswerCorrect) {
      onUserAnswer(questions[step], userAnswer);
    }

  }

  _getScreen(question) {
    if (!question) {
      const {
        screenParams,
      } = this.props;

      return <Welcome
        param={screenParams}
        onClick={this._handleNumberOfScreen}
      />;
    }

    // console.log(question);

    switch (question.type) {
      case `genre`: return <GenreQuestionScreen
        question={question}
        onAnswer={this._handleNumberOfScreen}
        key={`genre-question-screen-${this.state.question}`}
      />;

      case `artist`: return <ArtistQuestionScreen
        question={question}
        onAnswer={this._handleNumberOfScreen}
      />;
    }

    return null;
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

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
    errorCount: PropTypes.number.isRequired,
  }),
  updateData: PropTypes.func,
  question: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  isAnswerCorrect: PropTypes.bool,
};

export default Screen;
