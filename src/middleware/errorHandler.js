import {isHttpError} from "http-errors";



export async function errorHandler(err, req, res, next){
  if (isHttpError(err)){
    return res.status(err.status).json({error: err.message});
  }
  res.status(500).json({
    message: err.message,
  });
}
