import { HttpResponse } from "../http/httpReponse"
import { HttpRequest } from "../http/httpRequest"
import { Controller } from "../protocols/Controller"

export class AddChildController implements Controller {
  async handle(params: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ['name', 'totalMinutes']
    for (const field of requiredFields) {
      if (!params.body[field]) {
        return {
          statusCode: 400,
          body: new Error(`Missing param: ${field}`)
        }
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
