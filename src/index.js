import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import firebase from "firebase/app";
import "firebase/database";
import config from "./config";

const defaultState = {
    listItems: [],
    inputText: "",
}

function backlog(state = defaultState, action) {
  console.log(state);
  switch(action.type) {
    case 'ADD_LIST_ITEM':
      return Object.assign({}, state, { inputText: "", listItems: state.listItems.concat({ text: action.text, completed: false})});
    case 'DELETE_LIST_ITEM':
    {
      let listItems = state.listItems.filter(function (item, i) {
        return i !== action.index;
      });
      return Object.assign({}, state, {listItems});
    }
    case 'TOGGLE_LIST_ITEM_COMPLETED':
    {
      let listItems = state.listItems.slice()
      listItems[action.index].completed = action.completed;
      return Object.assign({}, state, {listItems});
    }
    case 'UPDATE_NEW_LIST_ITEM_INPUT':
      return Object.assign({}, state, { inputText: action.value});
    default:
      return state;
  }
}

let store;
var callback;

// Firebase Configuration
let FireConfig = {
  apiKey: config.Key,
  authDomain: config.Domain,
  databaseURL: config.DB,
  storageBucket: config.Storage,
};

let render = function(state) {
  ReactDOM.render(
    <App appState={state}/>,
    document.getElementById('root')
  );
}

// Initialize Our Firebase Connection
firebase.initializeApp(FireConfig);

function updateFirebase(state) {
  firebase.database().ref('logItem/').set(state.listItems);
}

firebase.database().ref('logItem/').orderByChild('id').once('value').then(function(data) {
  let startState = {
      listItems: data.val() ? data.val() : [],
      inputText: "",
  }
  store = createStore(backlog, startState);

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
