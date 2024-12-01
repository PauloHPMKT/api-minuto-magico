import { AddChildUseCase } from "../../domain/usecases/add-child"
import { MissinParamError } from "../error/missing-param.error"
import { AddChildController } from "./add-child.controller"

const makeAddChildUseCase = ():AddChildUseCase => {
  class AddChildUseCaseStub implements AddChildUseCase {
    add(data: any): any {
      return {}
    }
  }
  return new AddChildUseCaseStub()
}

const makeSut = (): SutTypes => {
  const addChildUseCaseStub = makeAddChildUseCase()
  const sut = new AddChildController(addChildUseCaseStub)
  return {
    sut,
    addChildUseCaseStub
  }
}

interface SutTypes {
  sut: AddChildController
  addChildUseCaseStub: AddChildUseCase
}

describe('AddChild Controller', () => {
  it('Should be defined', () => {
    const { sut } = makeSut()
    expect(sut).toBeDefined()
  })

  it('Should return 400 if no name is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        totalMinutes: 10,
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissinParamError('name'))
  })

  it('Should return 400 if no totalMinutes is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissinParamError('totalMinutes'))
  })

  it('Should return 400 if totalMinutes is not a number', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        totalMinutes: 'invalid_number',
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('The totalMinutes must be a number'))
  })

  it('Should return 200 if all required fields are provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        totalMinutes: 10,
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
  })
})