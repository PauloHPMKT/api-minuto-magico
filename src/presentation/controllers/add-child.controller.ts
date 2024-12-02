import { AddChildUseCase } from "../../domain/usecases/add-child"
import { MissinParamError } from "../error/missing-param.error"
import { badRequest, ok, serverError } from "../helpers/http-helpers"
import { HttpResponse } from "../http/httpReponse"
import { HttpRequest } from "../http/httpRequest"
import { Controller } from "../protocols/Controller"

export class AddChildController implements Controller {
  constructor(private readonly addChildUseCase: AddChildUseCase) {}

  async handle(params: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'totalMinutes']
      for (const field of requiredFields) {
        if (!params.body[field]) {
          return badRequest(new MissinParamError(field))
        }
      }
      
      const { name, totalMinutes } = params.body
      if (typeof totalMinutes !== 'number') {
        return badRequest(new Error('The totalMinutes must be a number'))
      } 
  
      const child = await this.addChildUseCase.add({ name, totalMinutes })
  
      return ok(child)
    } catch (error) {
      return serverError()
    }
  }
}
