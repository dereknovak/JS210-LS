/*
I: None
O: Strings of all multiples of 3/5, with both having !

Rules:
- Outputs should be strings
- Outputs should be on separate lines
- If div by both 3/5, append an !
- Include 100

DS:
- None, just loop

Algo:
- Loop thru all ints up thru 100
    - If div by 3 or 5, output value
        - Coerce to string first
    - If div by both, output value with !
*/

function divisibleBy3(num) {
  return num % 3 === 0;
}

function divisibleBy5(num) {
  return num % 5 === 0;
}

function multiplesOfThreeAndFive() {
  for (let currentNum = 1; currentNum <= 100; currentNum++) {
    if (divisibleBy3(currentNum) && divisibleBy5(currentNum)) {
      console.log(`'${String(currentNum)}!'`);
    } else if (divisibleBy3(currentNum) || divisibleBy5(currentNum)) {
      console.log(String(`'${String(currentNum)}'`));
    }
  }
}

multiplesOfThreeAndFive();

// Further Exploration

function multiplesOfThreeAndFive2(min, max) {
  for (let currentNum = min; currentNum <= max; currentNum++) {
    if (divisibleBy3(currentNum) && divisibleBy5(currentNum)) {
      console.log(`'${String(currentNum)}!'`);
    } else if (divisibleBy3(currentNum) || divisibleBy5(currentNum)) {
      console.log(String(`'${String(currentNum)}'`));
    }
  }
}

multiplesOfThreeAndFive2(15, 25);