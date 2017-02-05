import React from 'react';
import ReactDOM from 'react-dom';
import Backlog from './Backlog';
import { mockEmptyStore, mockSingleItemStore, mockMultipleItemStore, mockExpiredItemStore } from '../mocks/mockStore';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  (
    <Provider store={ mockEmptyStore }>
      <Backlog/>
    </Provider>
  ), div);
});

it('renders no items', () => {
  const tree = renderer.create(
    (
      <Provider store={ mockEmptyStore }>
        <Backlog/>
      </Provider>
    )).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a single item', () => {
  const tree = renderer.create(
    (
      <Provider store={ mockSingleItemStore }>
        <Backlog/>
      </Provider>
    )).toJSON();
  expect(tree).toMatchSnapshot();
});


test('It renders a list of items', () => {
  const tree = renderer.create(
    (
      <Provider store={ mockMultipleItemStore }>
        <Backlog/>
      </Provider>
    )).toJSON();
  expect(tree).toMatchSnapshot();
});

test('It does not render items that were completed more than 24 hours ago', () => {
  const tree = renderer.create(
    (
      <Provider store={ mockExpiredItemStore }>
        <Backlog/>
      </Provider>
    )).toJSON();
  expect(tree).toMatchSnapshot();
});
