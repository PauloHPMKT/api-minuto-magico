import { AddChildModel, AddChildUseCase, ChildModel } from "../../domain/usecases/add-child"
import { MissingParamError } from "../error/missing-param.error"
import { ServerError } from "../error/server-error"
import { AddChildController } from "./add-child"

const makeAddChildUseCase = (): AddChildUseCase => {
  class AddChildUseCaseStub implements AddChildUseCase {
    async add(data: AddChildModel): Promise<ChildModel> {
      const fakeChild = {
        id: 'valid_id',
        name: 'valid_name',
        totalMinutes: 10,
        enterDateTime: new Date(),
        exitDateTime: null as any,
        createdAt: new Date(),
        updatedAt: null as any
      }
      return new Promise(resolve => resolve(fakeChild))
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

describe('AddChildController', () => {
  it('Should be defined', () => {
    const { sut } = makeSut()
    expect(sut).toBeDefined()
  })

  it('Should AddChildController return 400 if no name is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        totalMinutes: 10,
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  it('Should AddChildController return 400 if no totalMinutes is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('totalMinutes'))
  })

  it('Should AddChildController return 400 if totalMinutes is not a number', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        totalMinutes: 'invalid_number',
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should AddChildController return 200 if all params is provided', async () => {
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

  it('Should return 500 if AddChildUseCase throws', async () => {
    const { sut, addChildUseCaseStub } = makeSut()
    jest.spyOn(addChildUseCaseStub, 'add').mockImplementationOnce(async () => {
      return new Promise((resolve, reject) => reject(new Error()))
    })
    const httpRequest = {
      body: {
        name: 'any_name',
        totalMinutes: 10,
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toEqual(new ServerError())
  })
})
