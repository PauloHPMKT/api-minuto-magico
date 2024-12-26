import { Child } from '../../domain/entities/Child';
import { GetChildren } from '../../domain/usecase/get-children';
import { GetChildrenRepository } from '../protocols/get-children-repository';

export class DbGetChildren implements GetChildren {
  constructor(private readonly getChildrenRepository: GetChildrenRepository) {}

  async get(): Promise<Child[]> {
    await this.getChildrenRepository.get();
    return new Promise((resolve) =>
      resolve([
        {
          id: 'valid_id1',
          name: 'valid_name',
          totalMinutes: 10,
          entryTime: new Date('2024-01-01'),
          exitTime: null,
          createdAt: new Date('2024-01-01'),
          updatedAt: null,
        },
        {
          id: 'valid_id2',
          name: 'valid_name',
          totalMinutes: 10,
          entryTime: new Date('2024-02-01'),
          exitTime: null,
          createdAt: new Date('2024-02-01'),
          updatedAt: null,
        },
      ]),
    );
  }
}
