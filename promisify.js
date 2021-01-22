const { readFile } = require('fs');
const { promisify } = require('util');

/*
readFile('./callback.js', 'utf8', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});
*/

const read = promisify(readFile);

read('./callback.js', 'utf8')
  .then(data => console.log(data))
  .catch(error => console.log(error));