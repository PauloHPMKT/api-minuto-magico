import { Router } from 'express';
import { adapteRoute } from '../adapters/express-routes-adapter';
import { makeAddChildController } from '../factories/child';

export default (router: Router): void => {
  router.post('/children', adapteRoute(makeAddChildController()));
};
