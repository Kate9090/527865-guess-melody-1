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

  _handleNumberOfScreen() {
    // const {
    //   questions,
    // } = this.props;

    console.log(this.props.questions.length);

    this.setState({
      question: this.state.question + 1 >= this.props.questions.length
        ? -1
        : this.state.question + 1,
    });
  }

  _getScreen(question) {
    if (!question) {
      const {
        screenParams,
      } = this.props;
      console.log(screenParams);
      // this._handleNumberOfScreen() = this._handleNumberOfScreen().bind(this);

      return <Welcome
        param={screenParams}
        onClick={this._handleNumberOfScreen()}
      />;
    }

    switch (question.type) {
      case `genre`: return <GenreQuestionScreen
        question={question}
        onAnswer={this._handleNumberOfScreen()}
      />;

      case `artist`: return <ArtistQuestionScreen
        question={question}
        onAnswer={this._handleNumberOfScreen()}
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
};

export default Screen;
