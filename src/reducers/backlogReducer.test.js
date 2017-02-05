import { backlogReducer } from './backlogReducer';
import { emptyState } from './backlogReducer';
import deepFreeze from 'deep-freeze';
import ActionCreators from '../actionCreators';
import { createMockState, createMockListItems, createMockListItem } from '../mocks/mockState';

test('Passing no state or action returns empty state', () => {
  expect(backlogReducer(undefined, {})).toEqual(emptyState);
});

test('ADD_LIST_ITEM adds a list item', () => {
  let state = emptyState;
  deepFreeze(state);

  const text = "hello";

  const action = ActionCreators.addListItem(createMockListItem({text}));
  const outState = createMockState(createMockListItems([{text}]))

  expect(backlogReducer(state, action)).toEqual(outState);
});

test('DELETE_LIST_ITEM deletes a list item', () => {
  const text = "hello";
  const id = 0;
  let state = createMockState(createMockListItems([{text, id}]));
  deepFreeze(state);
  const outState = createMockState();
  const action = ActionCreators.deleteListItem(id);

  expect(backlogReducer(state, action)).toEqual(outState);

});

test('TOGGLE_LIST_ITEM_COMPLETED toggles a list item', () => {
  const text = "hello";
  const id = 0;
  let initialState = createMockState(createMockListItems[{text, id}]);
  deepFreeze(initialState);
  const toggledState = createMockState(createMockListItems[{text, id}]);
  const action = ActionCreators.toggleListItemCompleted(id);
  expect(backlogReducer(initialState, action)).toEqual(toggledState);
  deepFreeze(toggledState);
  expect(backlogReducer(toggledState, action)).toEqual(initialState);
});

test('UPDATE_NEW_LIST_ITEM_INPUT updates input field', () => {
  const text = "hello";
  let initialState = createMockState();
  deepFreeze(initialState);
  const action = ActionCreators.updateNewListItemInput(text);
  const outState = createMockState([], text);
  expect(backlogReducer(initialState, action)).toEqual(outState);
});

test('LOAD_DATABASE replaces state object completely', () => {
  const initialText = 'hello';
  const dbText = ['a', 'b'];
  let initialState = createMockState(createMockListItems([{text: initialText}]));
  deepFreeze(initialState);
  const dbState = createMockState(createMockListItems([{text: dbText}]));
  const action = ActionCreators.loadDatabase(createMockListItems([{text: dbText}]));
  expect(backlogReducer(initialState, action)).toEqual(dbState);
});
