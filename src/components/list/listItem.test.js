import React from 'react';
import ReactDOM from 'react-dom';
import ListItemData from './listItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListItemData />, div);
  ReactDOM.unmountComponentAtNode(div);
});