function lastIndexOf(arr, value) {
  let index = arr.lastIndexOf(value);
  return index || -1;
}

function lastIndexOf2(arr, value) {
  for (let index = arr.length - 1; index >= 0; index--) {
    if (arr[index] === value) return index;
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1

console.log(lastIndexOf2([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf2([1, 2, 3], 4));        // -1