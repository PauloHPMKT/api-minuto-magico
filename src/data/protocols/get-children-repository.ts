import { Child } from '../../domain/entities/Child';

export interface GetChildrenRepository {
  get(): Promise<Child[]>;
}
