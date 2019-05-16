import React from 'react';
import renderer from 'react-test-renderer';

import ArtistQuestionScreen from './artist-question-screen.jsx';

import questions from '../../mocks/questions';
const mockQuestion = questions[1];

it(`ArtistQuestionScreen renders correctly`, () => {

  const tree = renderer
    .create(<ArtistQuestionScreen
      question = {mockQuestion}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
