function read(pages) {
      console.log('You started reading.');
      for (let page=0; page<pages; page++) {
              let message = 'You read page '+page;
              console.log(message);
      }
}

read(400);

// Use 2 spaces for each indentation
// operator should have a space between operands
// Explicitly coerce page number to a string before concatenation
// Use `page += 1` instead of `page++`

function read(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page += 1) {
    let message = 'You read page ' + String(page);
    console.log(message);
  }
}

read(400);