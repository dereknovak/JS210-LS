```js
let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);
```

This example will log `[ 'red', 'green', 'blue', 'yellow' ]` to the console.

When passing `colors` as an argument to the defined `updateColors` function invocation, its referenced array object is bound to the function's parameter `colors`. Because arrays are a type of reference data, the 2 variables will point to the same object in memory. Within the function, the value of `color` is destructively appended to `colors`, mutating the array to `['red', 'green', 'blue', 'yellow']`, which is what is seen output to the console on line 10.

This example demonstrates how variables that reference objects in JavaScript exibit a **pass-by-reference** object passing strategy when passed as an argument to a function. Because a reference to the original object is shared, the object can be mutated.