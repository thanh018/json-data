const check = true;

const promise = new Promise((resolve, reject) => {
  if (check) resolve('Done')
  else reject('Undone');
});

promise
  .then(res => console.log(res))
  .catch(error => console.error(error));

console.log(promise);
