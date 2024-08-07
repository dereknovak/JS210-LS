function push(arr, value) {
  return arr.push(value);
}

function push2(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

let count = [0, 1, 2];
console.log(push(count, 3));
console.log(count);

count = [0, 1, 2];
console.log(push2(count, 3));
console.log(count);