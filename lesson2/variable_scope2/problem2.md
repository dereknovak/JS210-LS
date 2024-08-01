```js
function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say();
```

This example will throw a `ReferenceError` due to the variable `a` not being defined.

Variables that are declared using `let` are scoped at the *block level*, so `a` is only accessible within the `if` clause. An error is therefore thrown on line 6 as JavaScript is unable to locate the variable.