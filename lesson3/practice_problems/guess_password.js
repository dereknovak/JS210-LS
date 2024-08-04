function guessPassword() {
  let rlSync = require('readline-sync');
  let password = 'password';

  for (let attempt = 1; attempt <= 3; attempt++) {
    let guess = rlSync.question('What is the password: ');

    if (guess === password) {
      return console.log('You have successfully logged in.');
    }
  }

  console.log('You have been denied access.');
}

guessPassword();