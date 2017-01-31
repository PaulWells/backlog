import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import './index.css';
import { updateFirebase } from './database/dbOperations';
import { configureStore } from './store';

const store = configureStore();

let render = function() {
  ReactDOM.render(
    <Root store={ store }/>
    ,document.getElementById('root')
  );
}

store.subscribe(() =>
  {
    render(store.getState());
    updateFirebase(store.getState());
  }
);

render();
