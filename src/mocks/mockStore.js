// export empty store
import { createStore } from 'redux';
import { createMockState, createMockListItems, createMockListItem } from './mockState';
import { moreThanOneDayAgo } from '../utils/time';

const mockReducer = (state, action) => {
  return state;
};

const item1 = {text: "hello", id: 0};
const item2 = {text: "it's me", id: 1};
const expiredCompletedItem = {text: "I'm from california", id: 2, completed: true, dateCompleted: moreThanOneDayAgo()}

export const mockEmptyStore = createStore(mockReducer, createMockState());
export const mockSingleItemStore = createStore(mockReducer, createMockState(createMockListItems([item1])));
export const mockMultipleItemStore = createStore(mockReducer, createMockState(createMockListItems([item1, item2])));
export const mockExpiredItemStore = createStore(mockReducer, createMockState(createMockListItems([expiredCompletedItem])));
