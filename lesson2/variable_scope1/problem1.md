```js
let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);
```

This code snippet will log `outer`, `inner`, and `outer` on separate lines.

On line 1, global variable `a` is declared and initialized to the string `'outer'`. On line 8, the value of this `a` is logged to the console. On line 9, the defined `testScope` function is invoked. Within the function, a separate function local variable `a` is declared and initialized to `'inner'`. This value is then logged to the console before terminating the function execution. Lastly, the value of global variable `a` is logged once again to the console on line 10.

It's important to note here that `a` on line 4 and `a` on line 1 are 2 different variables--line 1 is global and line 4 is local to the `testScope` function. This is why the value is not reassigned, as JavaScript can only locate the variable `a` from line 1: it's outside of the function's scope.