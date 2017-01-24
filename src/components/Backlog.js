import React, { Component } from 'react';
import getStore from '../index.js';

var store;
getStore(function (createdStore) {
  store = createdStore;
});

class Backlog extends Component {

  render() {
    return (
      <div>
      <LogTitle/>
      {this.props.backlogState.listItems.map(function(item, i){
        return <LogItem text={item.text} index={i} completed={item.completed} key={i}/>;
      })}
      <LogItemInput value={this.props.backlogState.inputText}/>
      </div>
    );
  }
}

class LogTitle extends Component {
  render() {
    return (
      <div>
      Backlog
      </div>
    );
  }
}

class LogItemInput extends Component {

  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown (event) {
    if (event.key === 'Enter') {
      store.dispatch({type: 'ADD_LIST_ITEM', text:this.props.value});
    }
  }

  handleChange (event) {
    store.dispatch({type: 'UPDATE_NEW_LIST_ITEM_INPUT', value: event.target.value})
  }

  render() {
    return (
      <div>
      <input type="text" value={this.props.value} onChange={this.handleChange} onKeyDown={this.onKeyDown}></input>
      </div>
    );
  }
}

class LogItem extends Component {

  render() {
    return (
      <div>
      <CheckBox checked={this.props.completed} index={this.props.index}/>
      <span style={{
              textDecoration:
              this.props.completed ?
                'line-through' :
                'none'
            }}>
            {this.props.text}
      </span>
      <DeleteIcon onDelete={() => store.dispatch({type: 'DELETE_LIST_ITEM', index: this.props.index })}/>
      </div>
    );
  }
}

class CheckBox extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    store.dispatch({type: 'TOGGLE_LIST_ITEM_COMPLETED', completed: !this.props.checked, index: this.props.index});
  }

  render() {
    return (
      <input type="checkbox" checked={this.props.checked} onChange={this.handleChange}/>
    );
  }
}

class DeleteIcon extends Component {
  render() {
    return (
      <button onClick={this.props.onDelete}>X</button>
    )
  }
}

export { Backlog }
