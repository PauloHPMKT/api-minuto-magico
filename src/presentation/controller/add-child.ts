import { MissingParamError } from "../error/missing-param.error"
import { badRequest } from "../helpers/http"
import { Controller } from "../protocols/controller"
import { HttpRequest, HttpResponse } from "../protocols/http"

export class AddChildController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'totalMinutes']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    const { name, totalMinutes } = httpRequest.body
    if (typeof totalMinutes !== 'number') {
      return badRequest(new Error('totalMinutes must be a number'))
    }
  }
}
