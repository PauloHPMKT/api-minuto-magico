import { Express, Router } from 'express';
import fg from 'fast-glob';

export default (app: Express): void => {
  const router = Router();
  app.use('/api', router);
  const routesPath = '**/src/main/routes/**routes.ts';
  fg.sync(routesPath).map(async (file) =>
    (await import(`../../../${file}`)).default(router),
  );
};
