import { randomBytes } from 'crypto';
import { Child } from '../../domain/entities/Child';
import { AddChildModel } from '../../domain/models/add-child';
import { AddChildRepository } from '../protocols/add-child-repository';
import { DbAddChild } from './db-add-child';

jest.mock('crypto', () => ({
  randomBytes: jest.fn().mockReturnValue({
    toString: jest.fn().mockReturnValue('valid_id'),
  }),
}));

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

  it('Should throw if totalMinutes is less than 10', async () => {
    const { sut } = makeSut();
    const childData = {
      name: 'valid_name',
      totalMinutes: 9,
    };
    const promise = sut.add(childData);
    await expect(promise).rejects.toThrow('Total minutes must be at least 10');
  });

  it('Should call AddChildRepository with correct values', async () => {
    const { sut, addChildRepositoryStub } = makeSut();
    const addSpy = jest.spyOn(addChildRepositoryStub, 'add');
    const createdAt = new Date();
    const entryTime = new Date();
    const childData = {
      name: 'valid_name',
      totalMinutes: 10,
      entryTime,
      exitTime: null as any,
      createdAt,
      updatedAt: null as any,
    };
    await sut.add(childData);
    expect(addSpy).toHaveBeenCalledWith(childData);
  });

  it('Should throw if AddChildRepository throws', async () => {
    const { sut, addChildRepositoryStub } = makeSut();
    jest
      .spyOn(addChildRepositoryStub, 'add')
      .mockReturnValueOnce(
        new Promise((resolve, reject) => reject(new Error())),
      );
    const childData = {
      name: 'valid_name',
      totalMinutes: 10,
    };
    const promise = sut.add(childData);
    await expect(promise).rejects.toThrow();
  });

  it('Should return a child on success', async () => {
    const { sut } = makeSut();
    const childData = {
      name: 'valid_name',
      totalMinutes: 10,
    };
    const child = await sut.add(childData);
    expect(child).toEqual({
      id: 'valid_id',
      name: 'valid_name',
      totalMinutes: 10,
      entryTime: expect.any(Date),
      exitTime: null,
      createdAt: expect.any(Date),
      updatedAt: null,
    });
  });
});
