let today = new Date();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let dayNumber = today.getDay();
let dayOfWeek = daysOfWeek[dayNumber];

console.log(`Today's day is ${dayOfWeek}`);