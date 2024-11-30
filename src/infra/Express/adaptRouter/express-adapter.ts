import { Request, Response } from "express"
import { Controller } from "../../../presentation/protocols/Controller"
import { HttpRequest } from "../../../presentation/http/httpRequest"

export const adaptRouter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      ...(req.body),
      ...(req.params),
      ...(req.query),
      ...(req.headers),
    }
    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body?.message
      })
    }
  }
}
