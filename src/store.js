import { backlogReducer } from "./reducers/backlogReducer"
import { createStore } from 'redux';
import { getAppState } from './database/dbOperations';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import ActionCreators from './actionCreators';

const configureStore = () => {
  var store = createStore(backlogReducer, loadState());

  getAppState().then(function(data) {
    store.dispatch(ActionCreators.loadDatabase(data.val()));
  });

  store.subscribe(throttle(() => {
    saveState({
      listItems: store.getState().listItems,
      inputText: ""
    });
  }), 1000);

  return store;
}


export { configureStore }
