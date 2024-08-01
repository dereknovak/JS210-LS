```js
function hello() {
  a = 'hi';
}

hello();
console.log(a);
```

This example will log `hi` to the console.

This problem is tricky, as global variable `a` was not initially declared before the invocation of the defined `hello` function on line 5. When searching for the global variable from within the function, JavaScript is unable to find it, but instead of throwing an error, it chooses to add it as a property of the global object and initialize the variable to `'hi'`. Because the global variable now exists within the program, when passing `a` as argument to the `log` method, JavaScript is able to find the variable and logs the referenced value `'hi'` to the console.