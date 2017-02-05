import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { mockEmptyStore } from '../mocks/mockStore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root store={mockEmptyStore}/>, div);
});
