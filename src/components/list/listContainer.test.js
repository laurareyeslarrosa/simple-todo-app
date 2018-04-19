import React from 'react';
import ReactDOM from 'react-dom';
import ListItems from './listContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListItems />, div);
  ReactDOM.unmountComponentAtNode(div);
});