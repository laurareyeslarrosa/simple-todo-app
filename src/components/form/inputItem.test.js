import React from 'react';
import ReactDOM from 'react-dom';
import InputItem from './inputItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});