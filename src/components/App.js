import React, { Component } from 'react';
import './App.css';
import { Backlog } from './Backlog';
import { store } from '../store';

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render () {
    return this.props.children;
  }
}
Provider.childContextTypes = {
  store: React.PropTypes.object
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="backlog">
          <Provider store={ store }>
            <Backlog backlogState={this.props.appState}/>
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
