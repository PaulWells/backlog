const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

export const isOlderThanOneDay = (date) => {
  const currentDate = new Date(Date.now());
  return (currentDate - date) > day;
}
