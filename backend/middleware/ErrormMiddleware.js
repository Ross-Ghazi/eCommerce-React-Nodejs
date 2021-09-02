const notFound = (req, res, next) => {
  const error = new Error(`Not Found -${req.originalUrl} `);
  res.status(404);
  next(error);
};

const ErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 20 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    detail: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, ErrorHandler };
