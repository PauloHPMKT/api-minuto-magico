import { Child } from './Child';

const makeSut = (): SutTypes => {
  const child = {
    id: 'valid_id',
    name: 'valid_name',
    totalMinutes: 10,
    entryTime: new Date(),
    createdAt: new Date(),
  };
  const sut = new Child(child);
  return {
    sut,
  };
};

interface SutTypes {
  sut: Child;
}

describe('Child entoty', () => {
  it('Should be defined', () => {
    const { sut } = makeSut();
    expect(sut).toBeDefined();
  });
});
