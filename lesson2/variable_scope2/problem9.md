```js
let a = 'outer';
let b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}
```

This example will log `outer` 3 times and `inner` once, in sequence, and on separate lines.

First, the defined `setScope` function is hoisted to the top of the program. Both global variables `a` and `b` are declared and initialized to `'outer'`. Lines 4 and 5 are straight forward, simply logging these values to the console. Then, the defined `setScope` function is invoked gets passed `a` as an argument, binding its value to the function's parameter `foo`. Local variable `foo` is then immediately reassigned, breaking the alias relationship between `foo` and `a` and therefore leaving the value of `a` unchanged. Because `b` reference the global variable declared on line 2, its value *is* reassigned to `'inner'`.

Both values are then logged to the console, with `a` still referencing `'outer'` and `b` now referencing `'inner'`.