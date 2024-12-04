import { HttpRequest, HttpResponse } from "../protocols/http"

export class AddChildController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }

    if (!httpRequest.body.totalMinutes) {
      return {
        statusCode: 400,
        body: new Error('Missing param: totalMinutes')
      }
    }
  }
}
