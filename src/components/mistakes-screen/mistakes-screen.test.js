import React from 'react';
import renderer from 'react-test-renderer';
import MistakesScreen from '@/components/game-mistakes/game-mistakes';

describe(`GameMistakes`, () => {
  it(`renders correctly with 1 mistakes`, () => {
    const tree = renderer.create(<MistakesScreen mistakes={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly without mistakes`, () => {
    const tree = renderer.create(<MistakesScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
