function unshift(arr, value) {
  arr.unshift(value);
  return arr.length;
}

function unshift2(arr, value) {
  for (let index = arr.length; index >= 1; index--) {
    arr[index] = arr[index - 1];
  }

  arr[0] = value;
  return arr.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));
console.log(count);

count = [1, 2, 3];
console.log(unshift2(count, 0));
console.log(count);