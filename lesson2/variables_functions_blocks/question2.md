```js
let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);
```

This example will log `[ 'red', 'green', 'blue', undefined ]` to the console.

The main difference here is that `updateColors` has a new parameter: `color`. At the point of invocation, though, only `colors` is added as an argument, which causes the function local variable `color` to reference `undefined`, as it was not assigned a value. This also causes **variable shadowing**, as the local variable shares the same name as the global variable `color` declared on line 1, so any reference to this variable within the `updateColors` function will see the local variable instead of the global one.