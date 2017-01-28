import React, { Component } from 'react';

class LogItem extends Component {

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const { index } = this.props;
    const listItem = store.getState().listItems[this.props.index];

    function handleCheck(completed) {
      store.dispatch({type: 'TOGGLE_LIST_ITEM_COMPLETED', completed: !listItem.completed, index});
    }

    function onDelete() {
      store.dispatch({type: 'DELETE_LIST_ITEM', index});
    }

    return (
      <ListItem
        completed={listItem.completed}
        text={listItem.text}
        handleCheck={handleCheck}
        onDelete={onDelete}/>
    )
  }
}
LogItem.contextTypes = {
  store: React.PropTypes.object
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
