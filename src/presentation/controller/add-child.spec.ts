import { MissingParamError } from "../error/missing-param.error"
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
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
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
    expect(httpResponse.body).toEqual(new MissingParamError('totalMinutes'))
  })

  it('Should AddChildController return 400 if totalMinutes is not a number', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        totalMinutes: 'invalid_number',
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
