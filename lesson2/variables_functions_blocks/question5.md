```js
let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);
addColor(colors, color);
console.log(newColor);
```

This example will log `[ 'red', 'green', 'blue' ]` to the console.

Although `blue` is removed from `colors`, global variable `color` is *reassigned to its value on line 10. This occurs because `color` is not declared within the `removeColor` function and therefore `color` on line 10 is referencing the global variable.

Also, while the newly declared `newColors` is assigned to the returned array object from `removeColors`, arrays are a reference type, and therefore `newColors` will reference the original object originally assigned to `colors`. So, when passing `colors` as an argument to the defined `addColor` function, its assigned value is `['red', 'green']`, to which `color`, now referencing `'blue'`, is appended.

For the same reason as above, although `newColor` is passed as an argument to the `log` method on line 16, both `newColor` and `colors` reference the same array object, so `[ 'red', 'green', 'blue' ]` will be logged.
