import express from 'express';
import morgan from 'morgan';

import { requestTime } from './middlewares/index.js';
import { tourRouter, usersRouter } from './routes/index.js';

const app = express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(requestTime);

// ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', usersRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
