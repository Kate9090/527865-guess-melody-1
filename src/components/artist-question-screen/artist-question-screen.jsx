import React from "react";
import PropTypes from 'prop-types';

const ArtistQuestionScreen = ({question, onAnswer}) => {
  const {
    answers
  } = question;
  return <section className="game__screen">
    <h2 className="game__title">Кто исполняет эту песню?</h2>
    <div className="game__track">
      <button className="track__button track__button--play" type="button"></button>
      <audio></audio>
    </div>

    <form className="game__artist" onChange={onAnswer}>
      {answers.map((it, i) => (
        <div className="artist" key = {`answer-${i}`}>
          <input className="artist__input visually-hidden" type="radio" name="answer" value={it.artist} id={`answer-${i}`} />
          <label className="artist__name" htmlFor={`answer-${i}`}>
            <img className="artist__picture" src="http://placehold.it/134x134" alt={it.artist} />
            {it.artist}
          </label>
        </div>
      )
      )}
    </form>
  </section>;
};

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      artist: PropTypes.oneOf([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lordi`]).isRequired,
    })).isRequired,
    artist: PropTypes.oneOf([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lordi`]).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
};

export default ArtistQuestionScreen;
