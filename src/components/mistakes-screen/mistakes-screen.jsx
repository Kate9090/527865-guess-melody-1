import React from 'react';
import PropTypes from 'prop-types';


const MistakesScreen = ({mistakes}) => {
  const mistakesArray = Array(mistakes).fill(1);

  return <div className="game__mistakes">
    {mistakesArray.map((mistake, i) =>
      <div className="wrong" key={`mistake-${i}`}></div>
    )}
  </div>;
};

MistakesScreen.defaultProps = {
  mistakes: 0,
};

MistakesScreen.propTypes = {
  mistakes: PropTypes.number.isRequired,
};


export default MistakesScreen;
