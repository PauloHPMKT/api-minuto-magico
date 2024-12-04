import { AddChildUseCase } from "../../domain/usecases/add-child"
import { InvalidParamError } from "../error/invalid-param.error"
import { MissingParamError } from "../error/missing-param.error"
import { badRequest, ok, serverError } from "../helpers/http"
import { Controller } from "../protocols/controller"
import { HttpRequest, HttpResponse } from "../protocols/http"

export class AddChildController implements Controller {
  constructor(private readonly addChildUseCase: AddChildUseCase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'totalMinutes']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { name, totalMinutes } = httpRequest.body
      if (typeof totalMinutes !== 'number') {
        return badRequest(new InvalidParamError('totalMinutes'))
      }

      const child = await this.addChildUseCase.add({ name, totalMinutes })

      return ok(child)
    } catch (error) {
      return serverError()
    }
  }
}
