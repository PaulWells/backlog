import React, { Component } from 'react';
import './App.css';
import { Backlog } from './Backlog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="backlog">
          <Backlog backlogState={this.props.appState}/>
        </div>
      </div>
    );
  }
}

export default App;
