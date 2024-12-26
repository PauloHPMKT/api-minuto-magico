import { Child } from '../../domain/entities/Child';
import { GetChildrenRepository } from '../protocols/get-children-repository';
import { DbGetChildren } from './db-get-children';

const makeGetChildrenRepository = (): GetChildrenRepository => {
  class ChildRepositoryStub implements GetChildrenRepository {
    async get(): Promise<Child[]> {
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
  return new ChildRepositoryStub();
};

const makeSut = (): SutTypes => {
  const getChildRepositoryStub = makeGetChildrenRepository();
  const sut = new DbGetChildren(getChildRepositoryStub);
  return {
    sut,
    getChildRepositoryStub,
  };
};

interface SutTypes {
  sut: DbGetChildren;
  getChildRepositoryStub: GetChildrenRepository;
}

describe('DbGetChildren', () => {
  it('Should be defined', () => {
    const sut = makeSut();
    expect(sut).toBeDefined();
  });

  it('Should throw if GetChildrenRepository throws', async () => {
    const { sut, getChildRepositoryStub } = makeSut();
    jest
      .spyOn(getChildRepositoryStub, 'get')
      .mockReturnValueOnce(
        new Promise((resolve, reject) => reject(new Error())),
      );
    const promise = sut.get();
    await expect(promise).rejects.toThrow();
  });

  it('Should throw if no children are found', async () => {
    const { sut, getChildRepositoryStub } = makeSut();
    jest
      .spyOn(getChildRepositoryStub, 'get')
      .mockReturnValueOnce(new Promise((resolve) => resolve([])));
    const promise = sut.get();
    await expect(promise).rejects.toThrow();
  });

  it('Should return children on success', async () => {
    const { sut } = makeSut();
    const children = await sut.get();
    expect(children).toEqual([
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
    ]);
  });
});
