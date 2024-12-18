import { Child } from '../../../domain/entities/Child';
import { AddChild } from '../../../domain/usecase/add-child';
import { AddChild as AddChildModel } from '../../../domain/models/add-child';
import { InvalidParamError } from '../../errors/invalid-param.error';
import { MissingParamError } from '../../errors/missing-param-error';
import { AddChildController } from './add-child';

class AddChildStub implements AddChild {
  async add(child: AddChildModel.Params): Promise<Child> {
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

const makeSut = (): SutTypes => {
  const addChildStub = new AddChildStub();
  const sut = new AddChildController(addChildStub);
  return {
    sut,
    addChildStub,
  };
};

interface SutTypes {
  sut: AddChildController;
  addChildStub: AddChildStub;
}

describe('AddChildController', () => {
  it('Should be defined', () => {
    const sut = makeSut();
    expect(sut).toBeDefined();
  });

  it('Should return 400 if no name is provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        totalMinutes: 10,
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('name'));
  });

  it('Should return 400 if no totalMinutes is provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        name: 'any_name',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('totalMinutes'));
  });

  it('Should return 400 if totalMinutes is not a number', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        name: 'any_name',
        totalMinutes: 'invalid_number',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new InvalidParamError('totalMinutes'));
  });

  it('Should return 500 if AddChild throws', async () => {
    const { sut, addChildStub } = makeSut();
    jest.spyOn(addChildStub, 'add').mockImplementationOnce(() => {
      throw new Error();
    });
    const httpRequest = {
      body: {
        name: 'any_name',
        totalMinutes: 10,
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
  });
});
