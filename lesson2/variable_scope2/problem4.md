```js
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello();
console.log(a);
```

This example will log `hello` twice to the console on separate lines.

First, because variable `a` was not declared in either the program's main scope nor the main scope of the function, JavaScript automatically adds the variable as a property to the global object on line 2 before initializing the variable to `'hello'`. In other words, after line 2, global variable `a` exists and now references `'hello'`. This is why both line 3 and 11 will log `hello`, despite nothing being visibly declared in the main scope.

Although there is a `let` declaration within the `if` statement, variables declared by this keyword are scoped at the block level, meaning the variable is only accessible within that `if` clause.