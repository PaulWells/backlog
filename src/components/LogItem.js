import React, { Component } from 'react';
import { store } from '../store';

class LogItem extends Component {
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleCheck(completed) {
    const state = store.getState();
    const index = this.props.index;
    store.dispatch({type: 'TOGGLE_LIST_ITEM_COMPLETED', completed: !state.listItems[index].completed, index});
  }

  onDelete() {
    store.dispatch({type: 'DELETE_LIST_ITEM', index:this.props.index});
  }

  render() {
    const props = this.props;
    const state = store.getState();
    const listItem = state.listItems[props.index];
    return (
      <ListItem
        completed={listItem.completed}
        text={listItem.text}
        handleCheck={this.handleCheck}
        onDelete={this.onDelete}/>
    )
  }
}

const ListItem = ({
  completed,
  text,
  handleCheck,
  onDelete
}) => (
  <div>
  <CheckBox checked={completed} handleCheck={handleCheck}/>
  <span style={{
          textDecoration:
          completed ?
            'line-through' :
            'none'
        }}>
        {text}
  </span>
  <DeleteIcon onDelete={onDelete}/>
  </div>
);

const CheckBox = ({
  checked,
  handleCheck
}) => (
  <input type="checkbox" checked={checked} onChange={handleCheck}/>
);

const DeleteIcon = ({
  onDelete
}) => (
  <button onClick={onDelete}>X</button>
);

export { LogItem  }
