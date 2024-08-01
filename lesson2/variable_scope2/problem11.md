```js
let a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};
```

This example will log `outer` to the console, then throw a `TypeError` due to `setScope` not being a function.

The output is straightforward, global variable `a` is declared and initialized to `'outer'`, which is then immediately logged to the console. The `TypeError` though is due to how JavaScript hoists variables declared by `var`. Although function declarations are hoisted to the top of the program, function *expressions* are not. Instead, the variable `setScope` is hoisted to the top, but is not initialized. Because of this, `setScope` simply references `undefined` and is therefore not a function.

For clarity, the code appears like this after hoisting:

```js
var setScope; // no function defined
let a = 'outer';

console.log(a);
setScope(); // program terminates due to error
console.log(a);

setScope = function () { // function expression is assigned to setScope (never happens)
  a = 'inner';
};
```