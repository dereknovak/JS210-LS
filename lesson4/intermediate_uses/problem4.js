function matrixSums(arr) {
  let sums = [];

  arr.forEach(subarr => {
    sums.push(subarr.reduce((acc, num) => acc + num, 0));
  });

  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12] 