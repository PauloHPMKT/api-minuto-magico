import { Child } from './Child';

const makeSut = (): SutTypes => {
  const child = {
    name: 'valid_name',
    totalMinutes: 10,
  };
  const sut = new Child(child);
  return {
    sut,
  };
};

interface SutTypes {
  sut: Child;
}

describe('Child entity', () => {
  it('Should be defined', () => {
    const { sut } = makeSut();
    expect(sut).toBeDefined();
  });

  it('Should create a child with minimum required values', () => {
    const { sut } = makeSut();
    const entryTime = new Date();
    const createdAt = new Date();
    expect(sut).toEqual({
      id: expect.any(String),
      name: 'valid_name',
      totalMinutes: 10,
      entryTime,
      exitTime: null as any,
      createdAt,
      updatedAt: null as any,
    });

    expect(sut).toHaveProperty('id');
    expect(sut.name).toEqual('valid_name');
    expect(sut.totalMinutes).toEqual(10);
    expect(sut.entryTime).toBeInstanceOf(Date);
    expect(sut.exitTime).toBeNull();
    expect(sut.createdAt).toBeInstanceOf(Date);
    expect(sut.updatedAt).toBeNull();
  });

  it('Should use current date for entryTime if not provided', () => {
    const { sut } = makeSut();
    const beforeCreation = new Date();
    const entryTime = sut.entryTime;
    const afterCreation = new Date();
    expect(entryTime.getTime()).toBeGreaterThanOrEqual(
      beforeCreation.getTime(),
    );
    expect(entryTime.getTime()).toBeLessThanOrEqual(afterCreation.getTime());
  });
});
