
const initialState = {
  step: -1,
  mistakes: 0,
};


const ActionCreator = ({
  'INCREMENT_STEP': () => ({
    type: `INCREMENT_STEP`,
    payload: 1,
  }),

  'INCREMENT_MISTAKES': (question, userAnswer, mistakes, maxMistakes) => {
    let isAnswerCorrect = false;
    // console.log(`1` + question);

    switch (question.type) {
      case `artist`:
        isAnswerCorrect = userAnswer.artist === question.song.artist;
        break;
      case `genre`:
        isAnswerCorrect =
          userAnswer.every((it, i) => it === (
            question.answers[i].genre === question.genre
          ));
        break;
    }
    if (!isAnswerCorrect && mistakes + 1 >= maxMistakes) {
    // if (mistakes > maxMistakes) {
      return {
        type: `RESET`,
      };
    }
    return {
      type: `INCREMENT_STEP`,
      payload: isAnswerCorrect ? 0 : 1,
      // stepPayload: isAnswerCorrect ? 1 : 0,
    };
  },
  // payload: 1,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_MISTAKES`:
      return Object.assign({}, state, {
        mistakes: state.mistakes + action.payload,
      });
    case `INCREMENT_STEP`:
      return Object.assign({}, state, {
        step: state.step + action.payload,
      });
    case `RESET`:
      return Object.assign({}, state, initialState);
  }

  return state;
};

export {reducer, ActionCreator};
