import { AddChildUseCaseImplementation } from "./add-child.usecase"

const makeSut = (): SutTypes => {
  const sut = new AddChildUseCaseImplementation()
  return { sut }
}

interface SutTypes {
  sut: AddChildUseCaseImplementation
}

describe('AddChildUseCase', () => {
  it('Should be defined', () => {
    const { sut } = makeSut()
    expect(sut).toBeDefined()
  })
})