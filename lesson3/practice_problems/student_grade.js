/*
Problem:
I: 3 grades
O: A string, a letter rep the grade the student receives

Grading:
- A
    - >= 90
- B
    - 70 <= x < 90
- C
    - 50 <= x < 70
- F
    else
*/

function letterGrade(num) {
  if (num >= 90) {
    return 'A';
  } else if (num >= 70) {
    return 'B';
  } else if (num >= 50) {
    return 'C';
  } else {
    return 'F';
  }
}

function avg(...nums) {
  return nums.reduce((accum, num) => accum + num, 0) / nums.length;
}

function gradeGenerator() {
  let rlSync = require('readline-sync');

  let s1 = parseInt(rlSync.question('Enter score 1: '));
  let s2 = parseInt(rlSync.question('Enter score 2: '));
  let s3 = parseInt(rlSync.question('Enter score 3: '));

  let total = avg(s1, s2, s3);
  let letter = letterGrade(total);

  console.log(`Based on the average of your 3 scores your letter grade is "${letter}".`);
}

gradeGenerator();