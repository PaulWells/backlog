import React from 'react';
import Backlog from './Backlog';
import Facebook from '../utils/facebook';
import isUserAuthorized from '../utils/authorization';
import { browserHistory } from 'react-router';

class ContentPage extends React.Component {

  componentDidMount() {
    Facebook.loadFbLoginApi(window, document, this).then(function () {
      isUserAuthorized().then(function(authInfo) {
        if (!authInfo.authorized) {
          browserHistory.push('/');
        }
      });
    });
  }

  render () {
    return (
      <div >

        <Backlog name={this.props.params.name} id={this.props.params.id}/>
      </div>
    )
  }
}

export default ContentPage
