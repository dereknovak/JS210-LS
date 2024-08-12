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

let today = new Date();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let dayNumber = today.getDay();
let dayOfWeek = daysOfWeek[dayNumber];
let dayOfMonth = today.getDate();
let month = today.getMonth();

console.log(`Today's day is ${dayOfWeek}, ${months[month]} ${dateSuffix(dayOfMonth)}`);
