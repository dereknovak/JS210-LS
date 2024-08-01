```js
console.log(a);

function hello() {
  a = 1;
}
```

This example will throw a `ReferenceError` due to `a` not being defined.

Although the function is hoisted to the top of the program, the function itself is never invoked and therefore `a` is never added as a property of the global object. Therefore, when attempting to pass it as an argument to the `log` method, JavaScript is unable to local the variable and complains.