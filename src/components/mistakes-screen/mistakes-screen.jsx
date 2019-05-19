import React, {Component} from 'react';
import PropTypes from 'prop-types';


class MistakesScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {mistakes} = this.props;

    return <div className="game__mistakes">
      {new Array(mistakes).map((i) =>
        <div className="wrong" key={i}></div>
      )}
    </div>;
  }
}

MistakesScreen.propTypes = {
  mistakes: PropTypes.number.isRequired,
};


export default MistakesScreen;
