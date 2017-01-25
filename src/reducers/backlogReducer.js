
const emptyState = {
  listItems: [],
  inputText: ""
};

function backlogReducer(state = emptyState, action) {
  switch(action.type) {
    case 'ADD_LIST_ITEM':
      return Object.assign({}, state, { inputText: "", listItems: state.listItems.concat({ text: action.text, completed: false})});
    case 'DELETE_LIST_ITEM':
    {
      let listItems = state.listItems.filter(function (item, i) {
        return i !== action.index;
      });
      return Object.assign({}, state, {listItems});
    }
    case 'TOGGLE_LIST_ITEM_COMPLETED':
    {
      let listItems = state.listItems.slice()
      listItems[action.index].completed = action.completed;
      return Object.assign({}, state, {listItems});
    }
    case 'UPDATE_NEW_LIST_ITEM_INPUT':
      return Object.assign({}, state, { inputText: action.value});
    case 'LOAD_DATABASE':
      return action.state;
    default:
      return state;
  }
}

export { backlogReducer, emptyState }
