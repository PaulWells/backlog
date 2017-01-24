import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { createStore } from 'redux';
import { backlogReducer } from "./reducers/backlog"
import { updateFirebase, getAppState } from "./database/dbOperations"

let render = function(state) {
  ReactDOM.render(
    <App appState={state}/>,
    document.getElementById('root')
  );
}

let store;
var callback;

getAppState().then(function(data) {
  let startState = {
      listItems: data.val() ? data.val() : [],
      inputText: "",
  }
  store = createStore(backlogReducer, startState);

  store.subscribe(() =>
    {
      render(store.getState());
      updateFirebase(store.getState());
    }
  )

  if (callback) {
    callback(store);
  }

  render(store.getState());
});

export default function getStore(cb) {

  if (store) {
    cb(store);
  } else {
    callback = cb;
  }
}
