const movies = require('./movies.json');
const reviews = require('./reviews.json');
const users = require('./users.json');

const getMovie = (id, cb) => {
  setTimeout(() => {
    const movie = movies.find(movie => movie.id === id);
    cb(movie);
  }, 1000)
};

const getReview = (id, cb) => {
  setTimeout(() => {
    const review = reviews.find(review => review.movie_id === id);
    cb(review);
  }, 1000);
};
const getUser = (name, cb) => {
  setTimeout(() => {
    const user = users.find(user => user.name === name);
    cb(user);
  }, 1000)
};

getMovie(3, (movie) => {
  console.log(movie);
  getReview(movie.id, (review) => {
    console.log(review);
    getUser(review.reviewer, (user) => {
      console.log(user);
    });
  });
});