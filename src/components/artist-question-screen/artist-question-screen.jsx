import React from "react";
import PropTypes from 'prop-types';

const ArtistQuestionScreen = (props) => {
  const {answers} = props;
  return <section className="game__screen">
    <h2 className="game__title">Кто исполняет эту песню?</h2>
    <div className="game__track">
      <button className="track__button track__button--play" type="button"></button>
      <audio></audio>
    </div>

    <htmlForm className="game__artist">
      {answers.map((it, i) => (
        <div className="artist" key = {`answer-${i}`}>
          <input className="artist__input visually-hidden" type="radio" name="answer" value={`answer-${i}`} id={`answer-${i}`} />
          <label className="artist__name" htmlFor={`answer-${i}`}>
            <img className="artist__picture" src="http://placehold.it/134x134" alt="Пелагея" />
            {it.artist}
          </label>
        </div>
      )
      )}
    </htmlForm>
  </section>;
};

ArtistQuestionScreen.propTypes = {
  artist: PropTypes.oneOf([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lordi`]).isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    artist: PropTypes.oneOf([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lordi`]).isRequired,
    src: PropTypes.string.isRequired
  })).isRequired,
};

export default ArtistQuestionScreen;
