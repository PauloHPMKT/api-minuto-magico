import { Child } from '../../domain/entities/Child';
import { GetChildren } from '../../domain/usecase/get-children';
import { GetChildrenRepository } from '../protocols/get-children-repository';

export class DbGetChildren implements GetChildren {
  constructor(private readonly getChildrenRepository: GetChildrenRepository) {}

  async get(): Promise<Child[]> {
    const children = await this.getChildrenRepository.get();
    if (!children.length) {
      throw new Error('No children found');
    }
    return children;
  }
}
