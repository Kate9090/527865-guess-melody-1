import React, {Component} from "react";
// import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
// import questions from './mocks/questions';

import Welcome from '../welcome/welcome.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: -1,
    };
  }
  render() {
    const {gameTime, errorCount} = this.props;
    const {question} = this.state;

    return <Welcome
      time={gameTime}
      errorCount={errorCount}
      onClick={() => {
        this.state.question = question + 1;
      }
      }
    />;
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
