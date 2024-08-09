function join(arr, delimiter) {
  let joinedStr = String(arr[0]);
  
  for (let i = 1; i < arr.length; i++) {
    joinedStr += delimiter + String(arr[i]);
  }

  return joinedStr;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));
console.log(join([1, 2, 3], ' and '));