import express, { Application, json } from "express";
import { AppRoutes } from "../routes";

export class App {
	private app: Application;
	public readonly router = new AppRoutes();

	constructor() {
		this.app = express();
		this.setMiddlewares();
		this.appRoutes();
	}

	setMiddlewares() {
		const middlewares = [
			json()
		]
		middlewares.forEach(middleware => this.app.use(middleware));
	}

	appRoutes() {
		this.app.use(this.router.router);
	}

	initServer(port: number) {
		this.app.listen(port, () => {
			console.log(`[API_MINUTO_MAGICO] - Server running on port http://localhost:${port}`);
		})
	}
}
