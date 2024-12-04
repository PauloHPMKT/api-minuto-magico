import { AddChildController } from "./add-child"

const makeSut = (): AddChildController => {
  return new AddChildController()
}

describe('AddChildController', () => {
  it('Should be defined', () => {
    const sut = makeSut()
    expect(sut).toBeDefined()
  })

  it('Should AddChildController return 400 if no name is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        totalMinutes: 10,
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })

  it('Should AddChildController return 400 if no totalMinutes is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: totalMinutes'))
  })
})