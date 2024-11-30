import { HttpResponse } from "../http/httpReponse"
import { HttpRequest } from "../http/httpRequest"
import { Controller } from "../protocols/Controller"

export class AddChildController implements Controller{
  async handle(params: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: {
        message: "Hello World"
      }
    }
  }
}
