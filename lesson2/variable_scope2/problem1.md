```js
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();
```

This example will log `undefined` to the console.

Although `a` is declared within an `if` statement, variables declared using `var` are scoped at the *function level*; therefore, when hoisting occurs, the variable is first brought to the top of the function, like so:

```js
function say() {
  var a;
  if (false) {
    a = 'hello from inside a block';
  }

  console.log(a);
}

say();
```