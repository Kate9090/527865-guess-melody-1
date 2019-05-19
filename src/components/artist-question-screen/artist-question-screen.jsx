import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

import AudioPlayer from '../audioplayer/audioplayer.jsx';

class ArtistQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }
  render() {
    const {question, onAnswer} = this.props;
    const {isPlaying} = this.state;
    const {
      answers, song,
    } = question;

    return <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <AudioPlayer
          isPlaying={isPlaying}
          onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
          src={song.src}
        />
      </div>

      <form className="game__artist" onChange={onAnswer}>
        {answers.map((it, i) => (
          <div className="artist" key = {`answer-${i}`}>
            <input className="artist__input visually-hidden"
              type="radio" name="answer"
              value={`answer-${i}`}
              id={`answer-${i}`}
              onChange={() => onAnswer(it)
              }
            />
            <label className="artist__name" htmlFor={`answer-${i}`}>
              <img className="artist__picture" src="http://placehold.it/134x134" alt={it.artist} />
              {it.artist}
            </label>
          </div>
        )
        )}
      </form>
    </section>;
  }
}

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    song: PropTypes.shape({
      artist: PropTypes.oneOf([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lordi`]).isRequired,
      src: PropTypes.string.isRequired,
    }),
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      artist: PropTypes.oneOf([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lordi`]).isRequired,
    })).isRequired,
    // artist: PropTypes.oneOf([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lordi`]).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
};

export default ArtistQuestionScreen;
