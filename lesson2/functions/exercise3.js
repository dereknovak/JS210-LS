function average(nums) {
  let total = 0

  for (let idx = 0; idx < nums.length; idx++) {
    total += nums[idx];
  }

  return total / nums.length;
}

console.log(average([1, 2, 3, 4, 5, 6]));