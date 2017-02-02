import React from 'react';
import { connect } from 'react-redux';
import ActionCreators from '../actionCreators';

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

const mapDispatchToProps = (dispatch, ownProps) => {
  const { listItem } = ownProps;
  const { id } = listItem;
  const { completed } = listItem;
  console.log(completed);

  return {
    completed,
    text: listItem.text,
    handleCheck: () => {
      dispatch(ActionCreators.toggleListItemCompleted(completed, id));
    },
    onDelete: () => {
      dispatch(ActionCreators.deleteListItem(id));
    }
  }
};

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//   const { dispatch } = dispatchProps;
//   const { listItem } = ownProps;
//   const { id } = listItem;
//   const { completed } = listItem;
//   console.log(completed);
//
//   return {
//     completed,
//     text: listItem.text,
//     handleCheck: () => {
//       dispatch(toggleListItemCompleted(completed, id));
//     },
//     onDelete: () => {
//       dispatch(deleteListItem(id));
//     }
//   }
// };

const LogItem = connect(
  null,
  mapDispatchToProps
)(ListItem);

export { LogItem }
