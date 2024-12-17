import { InvalidParamError } from '../../errors/invalid-param.error';
import { MissingParamError } from '../../errors/missing-param-error';
import { Controller } from '../../protocols/controller';
import { HttpRequest, HttpResponse } from '../../protocols/http';

export class AddChildController implements Controller {
  handle(httpRequest: HttpRequest): any {
    const requiredFields = ['name', 'totalMinutes'];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
          body: new MissingParamError(field),
        };
      }
    }

    const { name, totalMinutes } = httpRequest.body;
    if (isNaN(totalMinutes)) {
      return {
        statusCode: 400,
        body: new InvalidParamError('totalMinutes'),
      };
    }
  }
}
