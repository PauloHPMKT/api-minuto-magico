import { Child } from '../../../../domain/entities/Child';
import { MongoHelper } from '../helpers/mongo-helper';
import { ChildRepository } from './child';

describe('ChildRepository', () => {
  let childCreated: Child[];

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string);
  });

  afterAll(async () => {
    const childCollection = MongoHelper.getCollection('children');
    await childCollection.deleteMany({});
    await MongoHelper.disconnect();
  });

  const makeSut = (): ChildRepository => {
    return new ChildRepository();
  };

  it('Should return a child on success', async () => {
    const sut = makeSut();
    const child = await sut.add({
      name: 'valid_name',
      totalMinutes: 10,
      entryTime: new Date(),
      exitTime: null as any,
      createdAt: new Date(),
      updatedAt: null as any,
    });
    childCreated = [child];

    expect(child).toBeTruthy();
    expect(child.id).toBeTruthy();
    expect(child.name).toBe('valid_name');
    expect(child.totalMinutes).toBe(10);
    expect(child.entryTime).toBeInstanceOf(Date);
    expect(child.exitTime).toBeNull();
    expect(child.createdAt).toBeInstanceOf(Date);
    expect(child.updatedAt).toBeNull();
  });

  it('Should return a list of children on success', async () => {
    const sut = makeSut();
    const children = await sut.get();

    expect(children).toEqual(childCreated);
    expect(children).toBeTruthy();
    expect(children[0].id).toBeTruthy();
    expect(children[0].name).toBe('valid_name');
    expect(children[0].totalMinutes).toBe(10);
    expect(children[0].entryTime).toBeInstanceOf(Date);
    expect(children[0].exitTime).toBeNull();
    expect(children[0].createdAt).toBeInstanceOf(Date);
    expect(children[0].updatedAt).toBeNull();
  });
});
