import { Child } from '../entities/Child';
import { AddChild } from '../models/add-child';

export interface AddChild {
  add(data: AddChild.Params): Promise<Child>;
}
