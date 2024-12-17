export class AddChildController {
  handle(httpRequest: any): any {
    const requiredFields = ['name', 'totalMinutes'];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
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
