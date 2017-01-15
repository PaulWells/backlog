import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';

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
      return defaultState;
  }
}

let store = createStore(backlog);

let render = function(state) {
  ReactDOM.render(
    <App appState={state}/>,
    document.getElementById('root')
  );
}


store.subscribe(() =>
  {
    render(store.getState());
  }
)

render(defaultState);

export default store;
