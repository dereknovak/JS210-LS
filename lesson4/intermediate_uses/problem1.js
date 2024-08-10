function oddElementsOf(arr) {
  let newArr = [];

  for (let index = 0; index <= arr.length - 1; index++) {
    if (index % 2 === 1) newArr.push(arr[index]);
  }

  return newArr;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]