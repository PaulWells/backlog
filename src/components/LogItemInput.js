import React from 'react';
import { connect } from 'react-redux';
import ActionCreators from '../actionCreators';
import { createListItem } from '../objectCreators';

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

const mapStateToProps = (state) => ({
    value: state ? state.inputText : ""
});

const mapDispatchToProps = (dispatch) => ({
  handleTextChange: (event) => {
    dispatch(ActionCreators.updateNewListItemInput(event.target.value));
  },
  dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { value } = stateProps;
  return {
    onKeyDown: (event) => {
      if (event.key === 'Enter') {
        dispatch(ActionCreators.addListItem(createListItem(value)));
      }
    },
    handleTextChange: dispatchProps.handleTextChange,
    value,
  }
};

const LogItemInput = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Input);

export { LogItemInput }
