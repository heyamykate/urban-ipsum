import React from 'react';
import ReactDOM from 'react-dom';
import Ipsum from './Ipsum';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ipsum />, div);
});