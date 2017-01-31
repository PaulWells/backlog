import React from 'react';
import { connect } from 'react-redux';
import { updateNewListItemInput, addListItem } from '../actionCreators';

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
    dispatch(updateNewListItemInput(event.target.value));
  },
  dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { value } = stateProps;
  return {
    onKeyDown: (event) => {
      if (event.key === 'Enter') {
        dispatch(addListItem(value));
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
