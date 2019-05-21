import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

import Welcome from './welcome.jsx';

import parametrs from '../../mocks/parametrs';

const mock = parametrs;

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event`, () =>{
  const buttonClick = jest.fn();

  const welcome = shallow(<Welcome
    param = {mock}
    handleGameStart={buttonClick}
  />);

  const startButton = welcome.find(`button`);

  startButton.simulate(`click`);
  expect(buttonClick).toHaveBeenCalledTimes(1);
});

