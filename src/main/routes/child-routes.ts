import { Router } from 'express';

export default (router: Router): void => {
  router.post('/children', (req, res) => {
    res.status(201).json({ message: 'Hello from child routes' });
  });
};
