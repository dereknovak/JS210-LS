function slice(arr, startIdx, endIdx) {
  return arr.slice(startIdx, endIdx);
}

function slice2(arr, startIdx, endIdx) {
  let slicedArr = []
  for (let index = startIdx; index < endIdx; index++) {
    slicedArr.push(arr[index]);
  }

  return slicedArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

console.log(slice2([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice2(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]