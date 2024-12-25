import { GetChildren } from '../../../domain/usecase/get-children';
import { ok } from '../../helpers/http';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';

export class GetChildrenController implements Controller {
  constructor(private readonly getChildrenUseCase: GetChildren) {}

  async handle(): Promise<HttpResponse> {
    try {
      await this.getChildrenUseCase.get();
      return ok([]);
    } catch (error) {
      return {
        statusCode: 500,
        body: {
          error: 'Server error',
        },
      };
    }
  }
}
