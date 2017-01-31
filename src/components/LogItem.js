import React from 'react';
import { connect } from 'react-redux';
import { toggleListItemCompleted, deleteListItem } from '../actionCreators';

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

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { index } = ownProps;
  const listItem = stateProps.state.listItems[index];
  const { completed } = listItem;

  return {
    completed,
    text: listItem.text,
    handleCheck: () => {
      dispatch(toggleListItemCompleted(completed, index));
    },
    onDelete: () => {
      dispatch(deleteListItem(index));
    }
  }
};

const LogItem = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ListItem);

export { LogItem }
