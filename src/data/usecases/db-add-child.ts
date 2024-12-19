import { Child } from '../../domain/entities/Child';
import { AddChildModel } from '../../domain/models/add-child';
import { AddChild } from '../../domain/usecase/add-child';
import { AddChildRepository } from '../protocols/add-child-repository';

export class DbAddChild implements AddChild {
  constructor(private readonly addChildRepository: AddChildRepository) {}

  async add(child: AddChildModel.Params): Promise<Child> {
    return await this.addChildRepository.add(child);
  }
}
