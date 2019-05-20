import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

import AudioPlayer from '../audioplayer/audioplayer.jsx';

class ArtistQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      answer: {},
    };

    this._handleAnswer = this._handleAnswer.bind(this);
    this._changePlayerState = this._changePlayerState.bind(this);
  }

  _handleAnswer(answer) {
    this.setState({answer});
    this.props.handleSubmit(answer);
    this.setState({isPlaying: false});
  }

  _changePlayerState() {
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  }

  render() {
    const {question} = this.props;
    const {isPlaying} = this.state;
    const {
      answers, song,
    } = question;

    return <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <AudioPlayer
          isPlaying={isPlaying}
          onPlayButtonClick={() => this._changePlayerState}
          src={song.src}
        />
      </div>

      <form className="game__artist">
        {answers.map((it) => (
          <div className="artist" key = {`${it.artist}`}>
            <input className="artist__input visually-hidden"
              type="radio" name="answer"
              value={it.artist}
              id={it.artist}
              onChange={() => this._handleAnswer(it)
              }
            />
            <label className="artist__name" htmlFor={it.artist}>
              <img className="artist__picture" src={it.src} alt={it.artist} />
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
  handleSubmit: PropTypes.func,
};

export default ArtistQuestionScreen;
