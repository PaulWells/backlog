import React, { Component } from 'react';

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

  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();

    function onKeyDown(event) {
      if (event.key === 'Enter') {
        store.dispatch({type: 'ADD_LIST_ITEM', text: state.inputText});
      }
    }

    function handleTextChange(event) {
      store.dispatch({type: 'UPDATE_NEW_LIST_ITEM_INPUT', value: event.target.value})
    }

    return (
      <Input
        onKeyDown={onKeyDown}
        handleTextChange={handleTextChange}
        value={state ? state.inputText : ""}/>
    );
  }
}
LogItemInput.contextTypes = {
  store: React.PropTypes.object
}

export { LogItemInput }
