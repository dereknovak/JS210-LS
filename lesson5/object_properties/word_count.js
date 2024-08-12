function wordCount(str) {
  let words = str.split(' ');
  let counts = {};

  words.forEach(word => {
    if (counts[word]) {
      counts[word] += 1
    } else {
      counts[word] = 1
    }
  });

  return counts;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }