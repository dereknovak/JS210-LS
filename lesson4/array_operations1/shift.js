function shift(arr) {
  return arr.shift();
}

function shift2(arr) {
  let firstElement = arr[0];
  if (arr.length === 0) return undefined;
  
  for (let index = 0; index < arr.length; index++) {
    arr[index] = arr[index + 1];
  }

  arr.length = arr.length - 1;
  return firstElement;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]

count = [1, 2, 3];
console.log(shift2(count));
console.log(count);