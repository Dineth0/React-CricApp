import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const athenticateToken = (req:Request, res:Response, next:NextFunction) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split('')[1]

    if(!token){
         const error = new Error('Access denied. No token provided.');
    (error as any).statusCode = 401;
    return next(error);
    }
    try {
   
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecretjwtkey');
    (req as any).user = decoded;
    next();
  } catch (error) {
    const err = new Error('Invalid token.');
    (err as any).statusCode = 403;
    next(err);
  }
}