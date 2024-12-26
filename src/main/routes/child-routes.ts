import { Router } from 'express';
import { adapteRoute } from '../adapters/express-routes-adapter';
import { makeAddChildController } from '../factories/add-child';
import { makeGetChildrenController } from '../factories/get-children';

export default (router: Router): void => {
  router.post('/children', adapteRoute(makeAddChildController()));
  router.get('/children', adapteRoute(makeGetChildrenController()));
};
