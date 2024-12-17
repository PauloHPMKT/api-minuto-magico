import { AddChildController } from './add-child';

const makeSut = (): AddChildController => {
  return new AddChildController();
};

describe('AddChildController', () => {
  it('Should be defined', () => {
    const sut = makeSut();
    expect(sut).toBeDefined();
  });

  it('Should return 400 if no name is provided', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        totalMinutes: 10,
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });

  it('Should return 400 if no totalMinutes is provided', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: 'any_name',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });

  it('Should return 400 if totalMinutes is not a number', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: 'any_name',
        totalMinutes: 'invalid_number',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
