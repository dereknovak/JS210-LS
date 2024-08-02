```js
let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1);
updateColors(newColors, color2);
console.log(colors);
```

This example will log `[ 'red', 'green', 'blue', 'purple', 'pink' ]` to the console.

The example works similarly to the previous question, in that a reference type is passed into the method invocation, allowing the original array object to be mutated. What's different is that the function returns that array object, then assigns it to a newly declared variable `newColors`. Because arrays are a reference type, though that assignment will allow `newColors` to again reference the original object.

Therefore, when invoking `updateColors` using `newColors` as an argument, the original array from `colors` is still able to be mutated by any changes within the function, so we can see both string values appended onto the array.