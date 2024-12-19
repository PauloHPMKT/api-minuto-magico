import { DbAddChild } from './db-add-child';

const makeSut = (): DbAddChild => {
  const sut = new DbAddChild();
  return sut;
};

describe('DbAddChild', () => {
  it('Should be defined', () => {
    const sut = makeSut();
    expect(sut).toBeDefined();
  });
});
