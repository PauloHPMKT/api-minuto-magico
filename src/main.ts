import { App } from "./infra/Express/app";

const port = 3000;

const app = new App();
app.initServer(port);
