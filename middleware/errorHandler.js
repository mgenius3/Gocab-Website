// error handling middleware
function errorHandler(err, req, res, next) {
  // check if the error has a status code, otherwise default to 500
  const statusCode = err.statusCode || 500;
  // send error response
  res.status(statusCode).json({
    error: {
      message: err.message,
      status: statusCode,
      stack: err.stack,
    },
  });
  // call the next middleware function
  next();
}

// export the middleware function
module.exports = errorHandler;
