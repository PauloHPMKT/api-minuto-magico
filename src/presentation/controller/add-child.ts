import { HttpRequest, HttpResponse } from "../protocols/http"

export class AddChildController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'totalMinutes']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
          body: new Error(`Missing param: ${field}`)
        }
      }
    }
  }
}
