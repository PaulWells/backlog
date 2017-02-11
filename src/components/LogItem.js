import React from 'react';
import { connect } from 'react-redux';
import ActionCreators from '../actionCreators';
import { currentTime } from '../utils/time';

const ListItem = ({
  completed,
  text,
  color,
  handleCheck,
  onDelete
}) => (

  <div>
  <CheckBox checked={completed} handleCheck={handleCheck}/>
  <span style={{
          color: color,
          textDecoration: completed ? 'line-through' : 'none'
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

  return {
    completed,
    text: listItem.text,
    // eslint-disable-next-line
    color: listItem.addedBy == 0 ? "SteelBlue": "plum",
    handleCheck: () => {
      dispatch(ActionCreators.toggleListItemCompleted(completed, id, currentTime()));
    },
    onDelete: () => {
      dispatch(ActionCreators.deleteListItem(id));
    }
  }
};

const LogItem = connect(
  null,
  mapDispatchToProps
)(ListItem);

export { LogItem }
