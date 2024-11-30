import express, { Application, json } from "express";

export class App {
	private app: Application;

	constructor() {
		this.app = express();
		this.setMiddlewares();
	}

	setMiddlewares() {
		const middlewares = [
			json()
		]
		middlewares.forEach(middleware => this.app.use(middleware));
	}

	initServer(port: number) {
		this.app.listen(port, () => {
			console.log(`[API_MINUTO_MAGICO] - Server running on port http://localhost:${port}`);
		})
	}
}
