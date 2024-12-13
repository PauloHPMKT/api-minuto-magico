import { Child } from '../../domain/entities/Child';
import { AddChildModel } from '../../domain/models/add-child';
import { AddChildRepository } from '../protocols/add-child-repository';
import { DbAddChild } from './db-add-child';

const makeAddChildRepository = (): AddChildRepository => {
  class AddChildRepositoryStub implements AddChildRepository {
    async add(child: AddChildModel.Params): Promise<Child> {
      const fakeChild = {
        id: 'valid_id',
        name: 'valid_name',
        totalMinutes: 10,
        entryTime: new Date(),
        exitTime: null as any,
        createdAt: new Date(),
        updatedAt: null as any,
      };
      return new Promise((resolve) => resolve(fakeChild));
    }
  }

  return new AddChildRepositoryStub();
};

const makeSut = (): SutTypes => {
  const addChildRepositoryStub = makeAddChildRepository();
  const sut = new DbAddChild(addChildRepositoryStub);
  return {
    sut,
    addChildRepositoryStub,
  };
};

interface SutTypes {
  sut: DbAddChild;
  addChildRepositoryStub: AddChildRepository;
}

describe('DbAddChild', () => {
  it('Should be defined', () => {
    const { sut } = makeSut();
    expect(sut).toBeDefined();
  });

  it('Should call AddChildRepository with correct values', async () => {
    const { sut, addChildRepositoryStub } = makeSut();
    const addSpy = jest.spyOn(addChildRepositoryStub, 'add');
    const childData = {
      name: 'valid_name',
      totalMinutes: 10,
    };
    await sut.add(childData);
    expect(addSpy).toHaveBeenCalledWith({
      name: 'valid_name',
      totalMinutes: 10,
    });
  });
});
