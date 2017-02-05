const ActionCreators = {
  updateNewListItemInput: (value) => ({
    type: 'UPDATE_NEW_LIST_ITEM_INPUT',
    value
  }),
  addListItem: (item) => ({
    type: 'ADD_LIST_ITEM',
    item
  }),
  toggleListItemCompleted: (completed, id, dateCompleted) => ({
    type: 'TOGGLE_LIST_ITEM_COMPLETED',
    completed: !completed,
    id,
    dateCompleted
  }),
  deleteListItem: (id) => ({
    type: 'DELETE_LIST_ITEM',
    id
  }),
  loadDatabase: (listItems) => ({
    type: 'LOAD_DATABASE',
    listItems
  })
};

export default ActionCreators;
