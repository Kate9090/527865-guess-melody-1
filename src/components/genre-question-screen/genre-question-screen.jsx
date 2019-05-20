import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

import AudioPlayer from '../audioplayer/audioplayer.jsx';

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);
    // const {question} = this.props;
    // const {answers} = question;
    this.state = {
      activePlayer: -1,
      answers: [],
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleAnswer = this._handleAnswer.bind(this);
    this._changeActivePlayer = this._changeActivePlayer.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleSubmit(this.state.answers);
  }

  _handleAnswer(answer, i) {
    const {answers} = this.state;
    answer.i = i;

    const answerIndex = answers.findIndex((item) => item.i === answer.i);

    if (answerIndex !== -1) {
      this.setState({
        answers: [
          ...answers.slice(0, answerIndex),
          ...answers.slice(answerIndex + 1)
        ]
      });

      return;
    }s

    this.setState({answers: [...answers, answer]});
    // console.log(answers);
  }

  // console.log(answers);

  _changeActivePlayer(index) {
    this.setState({
      activePlayer: this.state.activePlayer === index ? -1 : index
    });
  }

  render() {
    const {question} = this.props;
    const {
      answers,
      genre,
    } = question;

    return <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={this._handleSubmit}
      >
        {answers.map((it, i) => (
          <div className="track" key = {`answer-genre-${i}`}>
            <AudioPlayer
              src={it.src}
              onPlayButtonClick={() =>
                this._changeActivePlayer(i)
              }
              isPlaying={i === this.state.activePlayer}
            />
            <div className="game__answer">
              <input
                className="game__input visually-hidden"
                type="checkbox"
                name="answer"
                value={it.genre}
                onChange={() => this._handleAnswer(it, i)}
                id={i} />
              <label className="game__check" htmlFor={i}>Отметить</label>
            </div>
          </div>)
        )}

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>;
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`rock`, `jazz`, `blues`, `pop`]).isRequired,
    })).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `blues`, `pop`]).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func,
};

export default GenreQuestionScreen;
