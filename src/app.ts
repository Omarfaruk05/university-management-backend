import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

import globalErrorHandler from './app/middlewares/globalErrorHandlers';
import routes from './app/routes';
import httpStatus from 'http-status';

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routes);

//testing
app.get('/', (req: Request, res: Response) => {
  res.send('All routes are working.');
});

// global error handler
app.use(globalErrorHandler);

//handle not found route

app.use(async (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'Route not found',
      },
    ],
  });
  next();
});

export default app;

//Md. Omar Faruk
