

const errorHandler = (err, req, res, next) => {
  if (err) {
    res.status(500).send('Something broke!');
  }
  next();
};

module.exports = errorHandler;
