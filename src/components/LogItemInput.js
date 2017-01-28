import React, { Component } from 'react';
import { store } from '../store';

// Presentational component which has no business logic
const Input = ({
  onKeyDown,
  handleTextChange,
  value
}) => (
  <div>
    <input type="text" value={value} onChange={handleTextChange} onKeyDown={onKeyDown}>
    </input>
  </div>
);

// Container component which decouples a presentational component and it's
// parent component
class LogItemInput extends Component {

  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onKeyDown(event) {
    const state = store.getState();
    if (event.key === 'Enter') {
      store.dispatch({type: 'ADD_LIST_ITEM', text: state.inputText});
    }
  }

  handleTextChange(event) {
    store.dispatch({type: 'UPDATE_NEW_LIST_ITEM_INPUT', value: event.target.value})
  }

  render() {
    const state = store.getState();
    return (
      <Input
        onKeyDown={this.onKeyDown}
        handleTextChange={this.handleTextChange}
        value={state ? state.inputText : ""}/>
    );
  }
}

export { LogItemInput }
