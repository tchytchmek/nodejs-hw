import {isHttpError} from "http-errors";



export function errorHandler(err, req, res, next){
  if (isHttpError(err)){
    return res.status(err.status).json({message : err.message || err.name});
  }
  res.status(500).json({
    message: err.message  || 'Internal Server Error',
  });
}
