import React from 'react';
import { browserHistory } from 'react-router';
import './SignIn.css';
import Facebook from '../utils/facebook';
import isUserAuthorized from '../utils/authorization';
/*global FB*/


class SignInComponent extends React.Component {

  componentDidMount() {
    Facebook.loadFbLoginApi(window, document, this);
  }

  render () {
    return (
      <div className="signIn">
        Welcome To Backlog
        <div>
          <button
            onClick={() => {

              isUserAuthorized().then(function (authInfo) {
                const name = authInfo.name;
                if (authInfo.authorized) {
                  browserHistory.push('/backlog/' + authInfo.backlogID + '/' + name.substr(0, name.indexOf(" ")));
                } else {
                  browserHistory.push('/notAuthorized/');
                }
              })
            }}
          >
            Log In
          </button>
        </div>
      </div>
    )
  }
}

export default SignInComponent
