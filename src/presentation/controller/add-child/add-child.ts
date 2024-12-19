import { ok, serverError } from '../../helpers/http';
import { AddChild } from '../../../domain/usecase/add-child';
import { InvalidParamError } from '../../errors/invalid-param.error';
import { MissingParamError } from '../../errors/missing-param-error';
import { badRequest } from '../../helpers/http';
import { Controller } from '../../protocols/controller';
import { HttpRequest, HttpResponse } from '../../protocols/http';

export class AddChildController implements Controller {
  constructor(private readonly addChildUseCase: AddChild) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'totalMinutes'];
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const { name, totalMinutes } = httpRequest.body;
      if (isNaN(totalMinutes)) {
        return badRequest(new InvalidParamError('totalMinutes'));
      }

      const child = await this.addChildUseCase.add({ name, totalMinutes });

      return ok(child);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
