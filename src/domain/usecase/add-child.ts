import { Child } from '../entities/Child';
import { AddChildModel } from '../models/add-child';

export interface AddChild {
  add(data: AddChildModel.Params): Promise<Child>;
}
