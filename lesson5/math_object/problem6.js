function rand(min, max) {
  let randNum;
  do {
    randNum = Math.floor(Math.random() * max);
  } while (randNum < min);

  return randNum;
}

console.log(rand(5, 10));
console.log(rand(20, 100));
console.log(rand(450, 1000));