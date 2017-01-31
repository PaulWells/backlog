import { backlogReducer } from "./reducers/backlogReducer"
import { createStore } from 'redux';
import { getAppState } from './database/dbOperations';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

var store = createStore(backlogReducer, loadState());

getAppState().then(function(data) {
  const startState = {
      listItems: data.val(),
      inputText: "",
  };

  store.dispatch({ type: 'LOAD_DATABASE', state: startState});
});

store.subscribe(throttle(() => {
  saveState({
    listItems: store.getState().listItems,
    inputText: ""
  });
}), 1000);

export { store }
