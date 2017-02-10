import React from 'react';
import { Provider } from 'react-redux';
import './Root.css';
import Backlog from './Backlog';
import { Router, Route, browserHistory } from 'react-router';
import SignIn from './SignIn';

const router = (
  <Router history={browserHistory} >
    <Route path='/backlog/:name' component={ Backlog }/>
    <Route path='/' component={ SignIn }/>
  </Router>
)

const Root = ({store}) => (
    <Provider store={ store }>
      { router }
    </Provider>
);

export default Root;
