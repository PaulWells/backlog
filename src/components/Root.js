import React from 'react';
import { Provider } from 'react-redux';
import './Root.css';
import ContentPage from './ContentPage';
import { Router, Route, browserHistory } from 'react-router';
import SignIn from './SignIn';
import NotAuthorized from './NotAuthorized';

const router = (
  <Router history={browserHistory} >
    <Route path='/backlog/:id/:name' component={ ContentPage }/>
    <Route path='/' component={ SignIn }/>
    <Route path='/NotAuthorized' component={ NotAuthorized }/>
  </Router>
)

const Root = ({store}) => (
    <Provider store={ store }>
      <div>
        <div className="titleBar">
          <div className="appTitle">Backlog</div>
        </div>
        { router }
      </div>
    </Provider>
);

export default Root;
