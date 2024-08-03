function multipleOf3(num) {
  return num % 3 === 0;
}

function multipleOf5(num) {
  return num % 5 === 0;
}

function fizzbuzz() {
  for (let num = 1; num <= 100; num++) {
    if (multipleOf3(num) && multipleOf5(num)) {
      console.log('FizzBuzz');
    } else if (multipleOf3(num)) {
      console.log('Fizz');
    } else if (multipleOf5(num)) {
      console.log('Buzz');
    } else {
      console.log(num);
    }
  }
}

fizzbuzz();