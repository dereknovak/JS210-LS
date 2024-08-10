What happens if you pass a `count` greater than the length of the array? How can you fix the function so it returns a new instance of the entire array when `count` is greater than the array length?

```js
function lastNOf(arr, count) {
  let index = arr.length - count;

  if (index < 0) {
    index = 0
  }

  return arr.slice(index);
}
```

If `count` exceeds the length of the array, then the `slice` function will receive a negative integer as its argument. When using a negative integer with `Array.prototype.slice`, the function will move sequentially from the end, returning `count` number of elements from the end of the array.