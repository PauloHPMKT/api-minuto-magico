import { Router } from "express";

export class AppRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routerInitiliazer();
  }

  routerInitiliazer() {
    this.router.get('/', (req, res) => {
      res.send('Hello World!');
    })
  }
}
