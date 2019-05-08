import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `path`,
          genre: `rock`,
        },
        {
          src: `path`,
          genre: `jazz`,
        },
        {
          src: `path`,
          genre: `blues`,
        },
        {
          src: `path`,
          genre: `rock`,
        },
      ],
    },
  ]
};

it(`renders correctly welcome screen`, () => {
  const {questions} = mock;
  const tree = renderer
    .create(<App
      gameTime={0}
      errorCount={0}
      questions={questions}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
