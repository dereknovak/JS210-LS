function splice(arr, startIdx, length) {
  let arrCopy = []
  let endIdx = startIdx + length;
  let returnedElements = arr.slice(startIdx, endIdx);

  for (let i = 0; i <= arr.length - 1; i++) {
    arrCopy[i] = arr[i];
  }

  arr.length = arr.length - length;
  let arrIndex = 0;
  for (let i = 0; i <= arrCopy.length - 1; i++) {
    if (!(returnedElements.includes(arrCopy[i]))) {
      arr[arrIndex] = arrCopy[i];
      arrIndex += 1;
    }
  }

  return returnedElements;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]