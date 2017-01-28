import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Backlog } from './Backlog';
import { store } from '../store';

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
