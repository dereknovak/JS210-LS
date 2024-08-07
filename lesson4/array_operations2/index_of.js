function indexOf(arr, value) {
  let index = arr.indexOf(value);
  return index || -1;
}

function indexOf2(arr, value) {
  for (let index = 0; index <= arr.length - 1; index++) {
    if (arr[index] === value) return index;
  }

  return -1
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1

console.log(indexOf2([1, 2, 3, 3], 3));         // 2
console.log(indexOf2([1, 2, 3], 4));            // -1