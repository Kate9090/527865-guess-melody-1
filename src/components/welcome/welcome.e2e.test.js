import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

import Welcome from './welcome.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event`, () =>{
  const buttonClick = jest.fn();

  const welcome = shallow(<Welcome
    times={0}
    errorCount={0}
    onClick={buttonClick}
  />);

  const startButton = welcome.find(`button`);

  startButton.simulate(`click`);
  expect(buttonClick).toHaveBeenCalledTimes(1);
});

