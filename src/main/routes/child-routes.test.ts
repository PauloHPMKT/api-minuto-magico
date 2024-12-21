import request from 'supertest';
import app from '../config/app';
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper';

describe('Child Routes', () => {
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

  it('should return an child on success', async () => {
    await request(app)
      .post('/api/children')
      .send({
        name: 'any_name',
        totalMinutes: 10,
      })
      .expect(201);
  });
});
