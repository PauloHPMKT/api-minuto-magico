import { DbGetChildren } from './db-get-children';

const makeSut = (): SutTypes => {
  const sut = new DbGetChildren();
  return {
    sut,
  };
};

interface SutTypes {
  sut: DbGetChildren;
}

describe('DbGetChildren', () => {
  it('Should be defined', () => {
    const sut = makeSut();
    expect(sut).toBeDefined();
  });
});
