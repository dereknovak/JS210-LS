function product(numbers) {
  return numbers.reduce((total, number) => total * number);
}

let nums = [2, 3, 4, 5]
let result = product(nums);