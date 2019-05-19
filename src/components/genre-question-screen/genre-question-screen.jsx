import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

import AudioPlayer from '../audioplayer/audioplayer.jsx';

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);
    const {question} = this.props;
    const {answers} = question;
    this.state = {
      activePlayer: -1,
      userAnswer: new Array(answers.lengh).fill(false),
    };
  }

  render() {
    const {question, onAnswer} = this.props;
    const {
      answers,
      genre,
    } = question;

    return <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={(evt)=> {
        evt.preventDefault();
        onAnswer(this.state.userAnswer);
      }}>
        {answers.map((it, i) => (
          <div className="track" key = {`answer-${i}`}>
            <AudioPlayer
              src={it.src}
              onPlayButtonClick={() => this.setState({
                activePlayer: this.state.activePlayer === i
                  ?
                  -1
                  : i
              })
              }
              isPlaying={i === this.state.activePlayer}
            />
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`} />
              <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
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
};

export default GenreQuestionScreen;
