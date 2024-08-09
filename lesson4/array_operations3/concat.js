function concat(arr1, arr2) {
  let newArr = [];
  let concatIdx = 0;

  for (let i = 0; i < arr1.length; i++) {
    newArr[concatIdx] = arr1[i];
    concatIdx += 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    newArr[concatIdx] = arr2[i];
    concatIdx += 1;
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));