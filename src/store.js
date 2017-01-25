import { backlogReducer, emptyState } from "./reducers/backlogReducer"
import { createStore } from 'redux';
import { getAppState } from './database/dbOperations';

var store = createStore(backlogReducer, emptyState);

getAppState().then(function(data) {
  const startState = {
      listItems: data.val() ? data.val() : [],
      inputText: "",
  }

  store.dispatch({ type: 'LOAD_DATABASE', state: startState});
});

export { store }
