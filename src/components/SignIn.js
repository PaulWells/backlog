import React from 'react';
import { browserHistory } from 'react-router';
import './SignIn.css';
import Facebook from '../utils/facebook';
import isUserAuthorized from '../utils/authorization';
/*global FB*/


class SignInComponent extends React.Component {

  componentDidMount() {
    Facebook.loadFbLoginApi(window, document, this).then(function () {
      return isUserAuthorized();
    }).then(function (authInfo) {
      const name = authInfo.name;
      if (authInfo.authorized) {
        browserHistory.push('/backlog/' + authInfo.backlogID + '/' + name.substr(0, name.indexOf(" ")));
      }
    });
  }

  render () {
    return (
      <div className="signIn">
        <div>
          <button className="facebookLogin"
            onClick={() => {
              Facebook.login().then(function () {
                return isUserAuthorized();
              }).then(function (authInfo) {
                const name = authInfo.name;
                if (authInfo.authorized) {
                  browserHistory.push('/backlog/' + authInfo.backlogID + '/' + name.substr(0, name.indexOf(" ")));
                } else {
                  browserHistory.push('/NotAuthorized/');
                }
              });
            }}
          >
            Log In With Facebook
          </button>
        </div>
      </div>
    )
  }
}

export default SignInComponent
