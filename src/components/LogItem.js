import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  return {
    state: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { index } = ownProps;
  const listItem = stateProps.state.listItems[index];
  const { completed } = listItem;

  return {
    completed,
    text: listItem.text,
    handleCheck: () => {
      dispatch({type: 'TOGGLE_LIST_ITEM_COMPLETED', completed: !completed, index});
    },
    onDelete: () => {
      dispatch({type: 'DELETE_LIST_ITEM', index});
    }
  }
};

const LogItem = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ListItem);

export { LogItem }
