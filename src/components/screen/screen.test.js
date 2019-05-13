import React from 'react';
import renderer from 'react-test-renderer';

import Screen from './screen.jsx';

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      gameTime: 0,
      errorCount: 0,
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
    .create(<Screen
      gameTime={0}
      errorCount={0}
      questions={questions}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
