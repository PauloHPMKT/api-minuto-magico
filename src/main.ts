import { App } from "./infra/app";

const port = 3000;

const app = new App();
app.initServer(port);
