import { currentTime } from '../utils/time';

const dateAdded = currentTime();

export const createMockListItem = (item) => {
  const defaultObject = {
    completed: false,
    text: "",
    id: 0,
    dateAdded
  }

  return Object.assign({}, defaultObject, item);
};

export const createMockListItems = (items) => {
  return items.map(function (item, i) {
    return createMockListItem(item);
  })
}

export const createMockState = (listItems = [], inputText = "") => ({
  inputText,
  listItems
});
