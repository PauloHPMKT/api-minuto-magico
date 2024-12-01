import { HttpResponse } from "../http/httpReponse"
import { HttpRequest } from "../http/httpRequest"
import { Controller } from "../protocols/Controller"

export class AddChildController implements Controller {
  async handle(params: HttpRequest): Promise<HttpResponse> {
    if (!params.body.name) {
      return {
        statusCode: 400,
        body: new Error("Missing param: name")
      }
    }

    if (!params.body.totalMinutes) {
      return {
        statusCode: 400,
        body: new Error("Missing param: totalMinutes")
      }
    }
    return {
      statusCode: 200,
      body: {
        message: "Hello World"
      }
    }
  }
}
