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
