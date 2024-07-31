function average(nums) {
  return sum(nums) / nums.length;
}

function sum(nums) {
  let total = 0

  for (let idx = 0; idx < nums.length; idx++) {
    total += nums[idx];
  }

  return total;
}

console.log(average([1, 2, 3, 4, 5, 6]));