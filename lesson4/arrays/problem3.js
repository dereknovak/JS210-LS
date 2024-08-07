function reverse(arr) {
  let reversedArr = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    reversedArr.push(arr[index]);
  }

  return reversedArr;
}

let array = [1, 2, 3, 4, 5];
console.log(reverse(array));