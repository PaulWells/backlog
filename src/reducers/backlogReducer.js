const emptyState = {
  listItems: [],
  inputText: ""
};

function backlogReducer(state = emptyState, action) {
  switch(action.type) {
    case 'ADD_LIST_ITEM':
      return Object.assign({}, state, { inputText: "", listItems: state.listItems.concat(action.item)});
    case 'DELETE_LIST_ITEM':
    {
      let listItems = state.listItems.filter(function (item, i) {
        return item.id !== action.id;
      });
      return Object.assign({}, state, {listItems});
    }
    case 'TOGGLE_LIST_ITEM_COMPLETED':
    {
      // refactor to use id
      let listItems = state.listItems.map(function (item) {
        if (item.id === action.id) {
          return Object.assign({}, item, {completed: !item.completed, dateCompleted: action.dateCompleted});
        }
        return item;
      });
      return Object.assign({}, state, {listItems});
    }
    case 'UPDATE_NEW_LIST_ITEM_INPUT':
      return Object.assign({}, state, { inputText: action.value});
    case 'LOAD_DATABASE':
      return Object.assign({}, state, { listItems: action.listItems});
    default:
      return state;
  }
}

export { backlogReducer, emptyState }
