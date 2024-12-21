import { Express } from 'express';
import { bodyParser } from '../middlewares/body-parser';
import { contentType } from '../middlewares/content-type';

export default (app: Express): void => {
  const middlewares = [bodyParser, contentType];
  middlewares.forEach((middleware) => app.use(middleware));
};
