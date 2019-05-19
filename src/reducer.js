
const initialState = {
  step: -1,
  mistakes: 0,
};


const actionCreator = ({
  'INCREMENT STEP': (question, userAnswer) => {
    let isAnswerCorrect = false;

    switch (question.type) {
      case `artist`:
        isAnswerCorrect = userAnswer.artist === question.song.artist;
        break;
      case `genre`:
        isAnswerCorrect = false;
        break;
    }
    return {
      type: `INCREMENT STEP`,
      payload: isAnswerCorrect ? 1 : 0,
    };
  },
  // payload: 1,
});

const reducer = (state = initialState, action
    //   = {
    //   type: `INCREMENT STEP`,
    //   payload: 1,
    // }
) => {
  switch (action.type) {
    case `INCREMENT STEP`:

      return Object.assign({}, state, {
        step: state.step + action.payload,
        mistakes: 0,
      });
  }

  return state;
};

export {reducer, actionCreator};
