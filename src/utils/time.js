const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;

export const isOlderThanOneDay = (date) => {
  if (!date) {
    return false;
  }
  return (currentTime() - date) > day;
}

export const isOlderThanTwoWeeks = (date) => {
  if (!date) {
    // If no date given, treat it as older than two weeks
    return true;
  }
  return (currentTime() - date) > week * 2;
}

export const currentTime = () => {
  return new Date(Date.now());
}

export const moreThanOneDayAgo = () => {
  return new Date(currentTime() - (day + hour));
}

export const moreThanTwoWeeksAgo = () => {
  return new Date(currentTime() - (week * 2 + hour));
}
