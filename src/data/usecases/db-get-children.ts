import { Child } from '../../domain/entities/Child';
import { GetChildren } from '../../domain/usecase/get-children';

export class DbGetChildren implements GetChildren {
  get(): Promise<Child[]> {
    throw new Error('Method not implemented.');
  }
}
