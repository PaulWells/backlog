import v4 from 'uuid';

export const createListItem = (text, addedBy) => {
  const dateAdded = new Date(Date.now()).toString();
  const id = v4();
  return {
    text,
    completed: false,
    dateAdded,
    id,
    addedBy
  };
};
