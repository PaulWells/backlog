import React from 'react';
import { Provider } from 'react-redux';
import './Root.css';
import { Backlog } from './Backlog';
import { Router, Route, browserHistory } from 'react-router';

const routes = (
  <Route path='/' component={ Backlog }/>
)

const Root = ({store}) => (
    <Provider store={ store }>
      <Router history={browserHistory} >
        { routes }
      </Router>
    </Provider>
);


export default Root;
