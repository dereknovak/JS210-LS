function arrayJoin(arr) {
  let string = '';
  for (let index = 0; index <= arr.length - 1; index++) {
    string += String(arr[index]);
  }

  return string;
}

let array = [1, 'a', 4];
console.log(arrayJoin(array));