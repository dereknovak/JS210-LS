function missing(arr) {
  let missingNums = [];
  for (let num = arr[0]; num <= arr[arr.length - 1]; num++) {
    if (!(arr.includes(num))) {
      missingNums.push(num);
    }
  }

  return missingNums;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []