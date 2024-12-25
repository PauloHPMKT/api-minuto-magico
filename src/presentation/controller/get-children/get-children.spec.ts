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
});
