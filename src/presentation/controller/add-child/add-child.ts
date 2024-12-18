import { InvalidParamError } from '../../errors/invalid-param.error';
import { MissingParamError } from '../../errors/missing-param-error';
import { badRequest } from '../../helpers/http';
import { Controller } from '../../protocols/controller';
import { HttpRequest, HttpResponse } from '../../protocols/http';

export class AddChildController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
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

    return {
      statusCode: 200,
      body: {},
    };
  }
}
