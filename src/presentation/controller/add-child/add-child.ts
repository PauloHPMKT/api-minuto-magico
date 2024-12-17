export class AddChildController {
  handle(httpRequest: any): any {
    const requiredFields = ['name', 'totalMinutes'];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
          body: new Error(`Missing param: ${field}`),
        };
      }
    }

    const { name, totalMinutes } = httpRequest.body;
    if (isNaN(totalMinutes)) {
      return {
        statusCode: 400,
      };
    }
  }
}
