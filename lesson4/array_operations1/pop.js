function pop(arr) {
  return arr.pop();
}

function pop2(arr) {
  if (arr.length === 0) return undefined;
  
  let lastElement = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastElement;
}

let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]

count = [1, 2, 3];
console.log(pop2(count));
console.log(count);
