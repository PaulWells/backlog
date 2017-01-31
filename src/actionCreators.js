const updateNewListItemInput = (value) => ({
  type: 'UPDATE_NEW_LIST_ITEM_INPUT',
  value
});

const addListItem = (value) => ({
  type: 'ADD_LIST_ITEM',
  text: value
});

const toggleListItemCompleted = (completed, index) => ({
  type: 'TOGGLE_LIST_ITEM_COMPLETED',
  completed: !completed, index
});

const deleteListItem = (index) => ({
  type: 'DELETE_LIST_ITEM', index
});

export { updateNewListItemInput, addListItem, toggleListItemCompleted, deleteListItem }
