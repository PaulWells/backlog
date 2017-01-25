import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { updateFirebase } from './database/dbOperations'
import { store } from './store'

let render = function(state) {
  ReactDOM.render(
    <App appState={state}/>,
    document.getElementById('root')
  );
}

store.subscribe(() =>
  {
    render(store.getState());
    updateFirebase(store.getState());
  }
);

render(store.getState());
