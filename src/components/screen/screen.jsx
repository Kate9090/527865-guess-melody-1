import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Welcome from '../welcome/welcome.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';


class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: -1,
    };
  }

  _getScreen(question, onClick) {
    if (!question) {
      const {
        errorCount,
        gameTime,
      } = this.props;

      return <Welcome
        errorCount={errorCount}
        time={gameTime}
        onClick={onClick}
      />;
    }

    switch (question.type) {
      case `genre`: return <GenreQuestionScreen
        question={question}
        onAnswer={onClick}
      />;

      case `artist`: return <ArtistQuestionScreen
        question={question}
        onAnswer={onClick}
      />;
    }

    return null;
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return <section>
      {this._getScreen(questions[question], () => {
        this.setState({
          question: question + 1 >= questions.length
            ? -1
            : question + 1,
        });
      })}
    </section>;
  }
}

Screen.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    gameTime: PropTypes.number.isRequired,
    errorCount: PropTypes.number.isRequired,
    answers: PropTypes.array.isRequired,
    // Of(PropTypes.shape({
    //   src: PropTypes.string.isRequired,
    //   genre: PropTypes.PropTypes.oneOf([`rock`, `jazz`, `blues`, `pop`]).isRequired,
    // })).isRequired
  })).isRequired,
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
};

export default Screen;
