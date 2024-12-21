import { Express } from 'express';
import { bodyParser, contentType, cors } from '../middlewares';

export default (app: Express): void => {
  const middlewares = [bodyParser, contentType, cors];
  middlewares.forEach((middleware) => app.use(middleware));
};
