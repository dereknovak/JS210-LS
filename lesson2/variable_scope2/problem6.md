```js
let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a);
```

This example logs `hello` to the console.

Here, we have 2 different `a` variables: one global (line 1) and one local to the `for` loop (line 4). Because variables declared by `let` are scoped at the block level, `a` inside of the loop is not accessible to the main scope; therefore, line 7 finds the global variable `a` and logs its unchanged value.