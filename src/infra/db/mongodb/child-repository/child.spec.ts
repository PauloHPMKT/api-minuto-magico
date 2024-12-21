import { MongoHelper } from '../helpers/mongo-helper';
import { ChildRepository } from './child';

describe('ChildRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    const childCollection = MongoHelper.getCollection('children');
    await childCollection.deleteMany({});
  });

  const makeSut = (): ChildRepository => {
    return new ChildRepository();
  };

  it('Should return a child on success', async () => {
    const sut = makeSut();
    const child = await sut.add({
      name: 'any_name',
      totalMinutes: 10,
    });
    expect(child).toBeTruthy();
    expect(child.id).toBeTruthy();
    expect(child.name).toBe('valid_name');
    expect(child.totalMinutes).toBe(10);
    expect(child.entryTime).toBeInstanceOf(Date);
    expect(child.exitTime).toBeNull();
    expect(child.createdAt).toBeInstanceOf(Date);
    expect(child.updatedAt).toBeNull();
  });
});
