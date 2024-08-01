```js
function hello() {
  let a = 'hello';
}

hello();
console.log(a);
```

This example will throw a `ReferenceError` due to global variable `a` not being declared. Although `a` is declared and initialized within the defined `hello` function, this variable is a function local variable that is tied to the `hello` function body. This exists in a higher-level scope than the main scope, which means that the main scope is unable to see the variable; therefore, an error is thrown.