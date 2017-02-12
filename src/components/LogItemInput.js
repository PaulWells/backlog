import React from 'react';
import { connect } from 'react-redux';
import ActionCreators from '../actionCreators';
import { createListItem } from '../objectCreators';

// Presentational component which has no business logic
const Input = ({
  onKeyDown,
  handleTextChange,
  value,
  color
}) => (
  <div className="logItemInputContainer">
    <textarea
        className="logItemInput"
        autoFocus type="text"
        placeholder="type a reminder..."
        value={value}
        style={{
          color: color,
        }}
        onChange={handleTextChange} onKeyDown={onKeyDown}>
    </textarea>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
    value: state ? state.inputText : "",
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
        dispatch(ActionCreators.addListItem(createListItem(value.trim(), ownProps.id)));
      }
    },
    handleTextChange: dispatchProps.handleTextChange,
    value,
    color: ownProps.id == 0 ? 'SteelBlue' : 'plum'
  }
};

const LogItemInput = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Input);

export { LogItemInput }
