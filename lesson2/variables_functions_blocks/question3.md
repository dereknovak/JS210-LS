```js
let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors);
```

This example logs `[ 'red', 'green', 'blue', 'purple', 'pink' ]` to the console.

On lines 1 and 2, global variables `colors1` and `colors2` are declared and are initialized to `'purple'` and `'pink'`, respectively. On line 3, global variable `colors` is declared and is initialized to the array `['red' , 'green', 'blue']`.

On lines 9 and 10, the defined `updateColors` function is invoked, first passing `colors` and `color1`, then passing `colors` and `color2` as argument. For each invocation, the argumented `color` is appended to `colors`, mutating the original array to contain this additional element. This is possible due to how JavaScript binds a reference to the original array to the `colors` parameter, allowing for the original object to be mutated by a destructive method. It so happens that the `push` method is destructive, so each invocation appends `color` to the original array object.

This example demonstrates how variables that reference objects in JavaScript exibit a **pass-by-reference** object passing strategy when passed as an argument to a function. Because a reference to the original object is shared, the object can be mutated.