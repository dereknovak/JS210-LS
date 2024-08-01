```js
let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);
```

This code snippet will output `outer`, `inner`, and `inner` to the console on separate lines.

On line 1, global variable `a` is declared and initialized to the string `'outer'`. On line 8, this value is logged to the console. On line 9, the defined `testScope` function is invoked. Within the function, `a` is *reassigned* to the string `'inner'`. Because a new variable is not declared and global variables are accessible anywhere within the program, this reassignment can occur. The new value is output to the console before terminating the function.

Lastly, line 10 will log `inner` to the console for the reason listed above: the global variable `a` was reassigned to `'inner'`.