const movies = require('./movies.json');
const reviews = require('./reviews.json');
const users = require('./users.json');

const getMovie = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(movie => movie.id === id);
      if (movie) resolve(movie);
      else reject('Not found any movie');
    }, 1000);
  });
};

const getReview = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const review = reviews.find(review => review.movie_id === id);
      if (review) resolve(review);
      else reject('Not found any review');
    }, 1000);
  });
};
const getUser = name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.name === name);
      if (user) resolve(user);
      else reject('Not found any user');
    }, 1000);
  });
};

// console.log(getMovie(1));

/* 
getMovie(1)
  .then(movie => {
    console.log(movie);
    return getReview(movie.id)
  })
  .then(review => {
    console.log(review);
    return getUser(review.reviewer);
  })
  .then(user => console.log(user))
  .catch(error => console.log(error));
*/

/*
Promise.all([getMovie(1), getReview(2), getUser('Matthew Samuel')])
  .then(values => console.log(values))
  .catch(error => console.error(error));
*/

(
  async () => {
    try {
      const movie = await getMovie(1);
      const review = await getReview(movie.id);
      const user = await getUser(review.reviewer);
      console.log("user", user)
    } catch (error) {
      console.log(error);
    }
  }
)();
