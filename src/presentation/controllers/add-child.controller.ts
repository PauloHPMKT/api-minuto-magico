import { badRequest } from "../helpers/http-helpers"
import { HttpResponse } from "../http/httpReponse"
import { HttpRequest } from "../http/httpRequest"
import { Controller } from "../protocols/Controller"

export class AddChildController implements Controller {
  async handle(params: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ['name', 'totalMinutes']
    for (const field of requiredFields) {
      if (!params.body[field]) {
        return badRequest(new Error(`Missing param: ${field}`))
      }
    }
    
    const { name, totalMinutes } = params.body
    if (typeof totalMinutes !== 'number') {
      return badRequest(new Error('The totalMinutes must be a number'))
    } 

    return {
      statusCode: 200,
      body: {
        message: "Hello World"
      }
    }
  }
}
