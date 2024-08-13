function formatTime(date) {
  let hours = date.getHours();
  let mins = date.getMinutes();

  hours = hours < 10 ? ('0' + String(hours)) : String(hours);
  mins = mins < 10 ? ('0' + String(mins)) : String(mins);

  return hours + ':' + mins;
}

let today = new Date();
console.log(formatTime(today));
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));