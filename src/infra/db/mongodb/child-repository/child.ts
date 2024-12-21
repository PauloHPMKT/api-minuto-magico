import { Child } from '../../../../domain/entities/Child';
import { AddChildModel } from '../../../../domain/models/add-child';
import { AddChildRepository } from '../../../../data/protocols/add-child-repository';

export class ChildRepository implements AddChildRepository {
  async add(data: AddChildModel.Params): Promise<Child> {
    return new Promise((resolve) =>
      resolve({
        id: 'valid_id',
        name: 'valid_name',
        totalMinutes: 10,
        entryTime: new Date(),
        exitTime: null,
        createdAt: new Date(),
        updatedAt: null,
      }),
    );
  }
}
