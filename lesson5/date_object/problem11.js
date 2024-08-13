function dateSuffix(date) {
  let lastDigit = String(date)[String(date).length - 1];
  let suffix;

  switch (lastDigit) {
    case '1':
      suffix = date === 11 ? 'th' : 'st';
      break;
    case '2':
      suffix = date === 12 ? 'th' : 'nd';
      break;
    case '3':
      suffix = date === 13 ? 'th' : 'rd';
      break;
    default:
      suffix = 'th'
      break;
  }

  return String(date) + suffix;
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);
  let year = date.getFullYear();

  console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()) + ', ' + year);
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

let today = new Date();
let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);

formattedDate(tomorrow);