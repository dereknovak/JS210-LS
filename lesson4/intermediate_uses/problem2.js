function boomerang(arr) {
  let reversedArr = arr.slice(0).reverse();
  return [arr, reversedArr].flat();
}

console.log(boomerang([1, 2, 3])); // return [1, 2, 3, 3, 2, 1]

let digits = [4, 8, 15, 16, 23, 42];
console.log(boomerang(digits));