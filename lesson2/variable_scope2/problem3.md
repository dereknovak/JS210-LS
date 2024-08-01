```js
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);
```

This example will log `hello` to the console, then throw a `ReferenceError` due to global variable `a` not being defined.

Although it appears that `a` is added as a property to the global object on line 2, hoisting causes `a` declared on line 6 to come to the top of the function, as variables declared with `var` are scoped at the function level.

```js
function hello() {
  var a;
  a = 'hello';
  console.log(a);

  if (false) {
    a = 'hello again';
  }
}

hello();
console.log(a);
```

Because of this, `a` on line 2 now references the function local variable, initializing it to `'hello'` and logging that value to the console. On line 11, because a global variable `a` does not exist, the JavaScript complains.