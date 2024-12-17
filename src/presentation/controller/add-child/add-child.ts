export class AddChildController {
  handle(httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
      };
    }

    if (!httpRequest.body.totalMinutes) {
      return {
        statusCode: 400,
      };
    }
  }
}
