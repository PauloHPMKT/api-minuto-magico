import { MissingParamError } from '../../errors/missing-param-error';

export class AddChildController {
  handle(httpRequest: any): any {
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
        body: new Error('totalMinutes'),
      };
    }
  }
}
