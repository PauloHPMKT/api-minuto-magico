import { GetChildren } from '../../../domain/usecase/get-children';
import { notFound, ok, serverError } from '../../helpers/http';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';

export class GetChildrenController implements Controller {
  constructor(private readonly getChildrenUseCase: GetChildren) {}

  async handle(): Promise<HttpResponse> {
    try {
      const children = await this.getChildrenUseCase.get();
      if (!children.length) {
        return notFound(new Error('No children found'));
      }
      return ok(children);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
