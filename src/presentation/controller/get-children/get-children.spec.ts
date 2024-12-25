import { Child } from '../../../domain/entities/Child';
import { GetChildren } from '../../../domain/usecase/get-children';
import { GetChildrenController } from './get-children';

class GetChildrenStub implements GetChildren {
  async get(): Promise<Child[]> {
    return new Promise((resolve) =>
      resolve([
        {
          id: 'valid_id1',
          name: 'valid_name',
          totalMinutes: 10,
          entryTime: new Date(),
          exitTime: null,
          createdAt: new Date(),
          updatedAt: null,
        },
        {
          id: 'valid_id2',
          name: 'valid_name',
          totalMinutes: 10,
          entryTime: new Date(),
          exitTime: null,
          createdAt: new Date(),
          updatedAt: null,
        },
      ]),
    );
  }
}

const makeSut = (): SutTypes => {
  const getChildrenStub = new GetChildrenStub();
  const sut = new GetChildrenController(getChildrenStub);
  return {
    sut,
    getChildrenStub,
  };
};

interface SutTypes {
  sut: GetChildrenController;
  getChildrenStub: GetChildrenStub;
}

describe('GetChildrenController', () => {
  it('Should be defined', () => {
    const { sut } = makeSut();
    expect(sut).toBeDefined();
  });

  it('Should return 200 on success', async () => {
    const { sut } = makeSut();
    const HttpResponse = await sut.handle();
    expect(HttpResponse.statusCode).toBe(200);
  });

  it('Should return 500 if GetChildren throws', async () => {
    const { sut, getChildrenStub } = makeSut();
    jest.spyOn(getChildrenStub, 'get').mockImplementationOnce(() => {
      throw new Error();
    });
    const httpResponse = await sut.handle();
    expect(httpResponse.statusCode).toBe(500);
  });
});
