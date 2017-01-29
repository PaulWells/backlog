import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  return {
    value: state ? state.inputText : ""
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleTextChange: (event) => {
      dispatch({type: 'UPDATE_NEW_LIST_ITEM_INPUT', value: event.target.value})
    },
    dispatch
  }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { value } = stateProps;

  return {
    onKeyDown: (event) => {
      if (event.key === 'Enter') {
        dispatch({type: 'ADD_LIST_ITEM', text: value});
      }
    },
    handleTextChange: dispatchProps.handleTextChange,
    ...stateProps,
  }
};

const LogItemInput = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Input);

export { LogItemInput }
