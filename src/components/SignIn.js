import React from 'react';
// import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import './SignIn.css';
import Facebook from '../utils/facebook';
/*global FB*/


class SignInComponent extends React.Component {

  componentDidMount() {
    Facebook.loadFbLoginApi(window, document, this);
    console.log('componentDidMount2');
  }

  render () {
    return (
      <div className="signIn">
        Welcome To Backlog
        <div>
          <button
            onClick={() => {
              Facebook.checkLoginState(function () {
                console.log('checkLoginState');
                Facebook.getMyFacebookInfo(function(response) {
                  console.log('getMyFacebookInfo');
                  const name = response.name;
                  browserHistory.push('/backlog/' + name.substr(0, name.indexOf(" ")));
                });

              });
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
