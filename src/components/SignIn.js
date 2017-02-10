import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const SignInComponent = () => (
  <div>
    Sign In To Backlog
    <div>
      <button
        onClick = {() => {
          browserHistory.push('/backlog/Paul');
        }}
      >
        BackLog
      </button>
    </div>
  </div>
)

export default SignInComponent
