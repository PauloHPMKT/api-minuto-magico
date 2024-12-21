import { Child } from '../../domain/entities/Child';
import { ChildModel } from '../../domain/models/child';

export interface AddChildRepository {
  add(data: ChildModel): Promise<Child>;
}
