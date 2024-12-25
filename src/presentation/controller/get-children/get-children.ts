import { ok } from '../../helpers/http';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';

export class GetChildrenController implements Controller {
  async handle(): Promise<HttpResponse> {
    try {
      return ok([]);
    } catch (error) {
      console.error(error);
    }
  }
}
