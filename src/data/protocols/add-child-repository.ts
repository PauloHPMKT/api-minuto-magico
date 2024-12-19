import { Child } from '../../domain/entities/Child';
import { AddChildModel } from '../../domain/models/add-child';

export interface AddChildRepository {
  add(data: AddChildModel.Params): Promise<Child>;
}
