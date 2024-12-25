import { GetChildrenController } from './get-children';

const makeSut = (): GetChildrenController => {
  const sut = new GetChildrenController();
  return sut;
};

describe('GetChildrenController', () => {
  it('Should be defined', () => {
    const sut = makeSut();
    expect(sut).toBeDefined();
  });

  it('Should return 200 on success', async () => {
    const sut = makeSut();
    const HttpResponse = await sut.handle();
    expect(HttpResponse.statusCode).toBe(200);
  });
});
