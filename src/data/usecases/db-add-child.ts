import { Child } from '../../domain/entities/Child';
import { AddChildModel } from '../../domain/models/add-child';
import { AddChild } from '../../domain/usecase/add-child';
import { AddChildRepository } from '../protocols/add-child-repository';

export class DbAddChild implements AddChild {
  constructor(private readonly addChildRepository: AddChildRepository) {}

  async add(data: AddChildModel.Params): Promise<Child> {
    if (data.totalMinutes < 10) {
      throw new Error('Total minutes must be at least 10');
    }
    const child = new Child({
      name: data.name,
      totalMinutes: data.totalMinutes,
    });
    return await this.addChildRepository.add(child);
  }
}
