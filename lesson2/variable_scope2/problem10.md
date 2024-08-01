```js
let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);
```

50
60
15

This example will log `50`, `60`, and `15` to the console on separate lines.

First, the initial value of `total` is logged to the console, outputting `50`. The defined function `incrementBy` is then invoked, passing `10` as an argument and binding it to the function's parameter `increment`. Within the function, global variable `total` is *reassigned* to the sum of itself and `increment`, referencing the new value of `60`. This is then logged to the console on line 10. Lastly, because global variable `increment` was never reassigned, its original value of `15` is logged to the console on line 11.