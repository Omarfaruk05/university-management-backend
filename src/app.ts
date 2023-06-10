import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

import globalErrorHandler from './app/middlewares/globalErrorHandlers';
import routes from './app/routes';

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

export default app;

//Md. Omar Faruk
