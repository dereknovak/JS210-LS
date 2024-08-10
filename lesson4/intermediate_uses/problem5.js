function uniqueElements(arr) {
  let uniqueArr = [];
  arr.forEach(element => {
    if (!(uniqueArr.includes(element))) {
      uniqueArr.push(element);
    }
  });

  return uniqueArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]