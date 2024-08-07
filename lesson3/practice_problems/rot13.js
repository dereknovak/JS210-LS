/*
I: A string
O: A string, encrypted

Rules:
- If an alpha character
    - Change to 13 positions later
        - If this exceeds the alpha, go back to beginning
        - Preserve case
- Don't modify characters that aren't letters

Example:
Hello => Uryyb
Door1 => Qbbe1

Data Structure:


*/

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

function isUpperCase(letter) {
  return letter.match(/[A-Z]/);
}

function isLowerCase(letter) {
  return letter.match(/[a-z]/);
}

function rot13(string) {
  const ROTATION_VALUE = 13;
  const CIPHER = createCipher();

  function createCipher() {
    let cipher = {};
    for (let i = 0; i <= ALPHABET.length - 1; i++) {
      let asciiCode = ALPHABET[i].charCodeAt(0);

      if (i < 13) {
        asciiCode += ROTATION_VALUE;
      } else {
        asciiCode -= ROTATION_VALUE;
      }

      let encryptedLetter = String.fromCharCode(asciiCode);
      cipher[ALPHABET[i]] = encryptedLetter;
    }

    return cipher;
  }

  function encrypt(text) {
    return text.split('').map(char => {
      if (isLowerCase(char)) {
        return CIPHER[char];
      } else if (isUpperCase(char)) {
        return CIPHER[char.toLowerCase()].toUpperCase();
      } else {
        return char;
      }
    }).join('');
  }

  return encrypt(string);
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

console.log(rot13('I will call you at the number 123-456-7890.'));
console.log(rot13(rot13('I will call you at the number 123-456-7890.')));

console.log(rot13('Can, YOU, come up**, with a $$$ test cAsE??'));
console.log(rot13(rot13('Can, YOU, come up**, with a $$$ test cAsE??')));

console.log(rot13('Znl V xvaqyl erdhrfg lbhe srrqonpx? Gunax lbh fb zhpu!'));




