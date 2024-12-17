import { AddChildController } from './add-child';

describe('AddChildController', () => {
  it('Should be defined', () => {
    const sut = new AddChildController();
    expect(sut).toBeDefined();
  });

  it('Should return 400 if no name is provided', () => {
    const sut = new AddChildController();
    const httpRequest = {
      body: {
        totalMinutes: 10,
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });

  it('Should return 400 if no totalMinutes is provided', () => {
    const sut = new AddChildController();
    const httpRequest = {
      body: {
        name: 'any_name',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
