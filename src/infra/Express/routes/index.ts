import { Router } from "express";
import { adaptRouter } from "../adaptRouter/express-adapter";
import { AddChildController } from "../../../presentation/controllers/add-child.controller";
import { addChildController } from "./handle";

export class AppRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routerInitiliazer();
  }

  routerInitiliazer() {
    this.router.get('/', adaptRouter(addChildController));
  }
}
