import { ErrorRequestHandler } from 'express';
import { CustomError } from './customError';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.send(err.code).json({ name: err.name, message: err.message });
  }
  return res.send(500).json({ message: 'Critical Error Occured', err });
};

export default errorHandler;
