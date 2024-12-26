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

  it('should return a list of children on success', async () => {
    await request(app)
      .post('/api/children')
      .send({
        name: 'any_name',
        totalMinutes: 10,
      })
      .expect(201);

    const response = await request(app).get('/api/children').expect(200);
    console.log(response.body);
    expect(response.body.length).toBe(1);
    expect(response.body).toEqual([
      {
        name: 'any_name',
        totalMinutes: 10,
        entryTime: expect.any(String),
        exitTime: null,
        createdAt: expect.any(String),
        updatedAt: null,
        id: expect.any(String),
      },
    ]);
  });
});
