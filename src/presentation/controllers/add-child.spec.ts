import { AddChildController } from "./add-child.controller"

const makeSut = (): AddChildController => {
  const sut = new AddChildController()
  return sut
}

describe('AddChild Controller', () => {
  it('Should be defined', () => {
    const sut = makeSut()
    expect(sut).toBeDefined()
  })

  it('Should return 400 if no name is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        totalMinutes: 10,
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })

  it('Should return 400 if no totalMinutes is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should return 400 if totalMinutes is not a number', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        totalMinutes: 'invalid_number',
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})