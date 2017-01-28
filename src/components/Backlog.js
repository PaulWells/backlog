import React, { Component } from 'react';
import { LogItemInput } from './LogItemInput';
import { LogItem } from './LogItem';

class Backlog extends Component {

  render() {
    return (
      <div>
      <LogTitle/>
      {this.props.backlogState.listItems.map(function(item, i){
        return <LogItem
                  index={i}
                  key={i}/>;
      })}
      <LogItemInput/>
      </div>
    );
  }
}

const LogTitle = () => (
  <div>
    Backlog
  </div>
);

export { Backlog }
