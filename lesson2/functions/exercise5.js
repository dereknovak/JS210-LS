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

let temperatures = [92, 98, 95, 96, 99];
console.log(average(temperatures));