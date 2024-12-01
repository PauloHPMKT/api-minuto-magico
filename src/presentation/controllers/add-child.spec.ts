import { AddChildController } from "./add-child.controller"

describe('AddChild Controller', () => {
  it('Should be defined', () => {
    const sut = new AddChildController()
    expect(sut).toBeDefined()
  })

  it('Should return 400 if no name is provided', async () => {
    const sut = new AddChildController()
    const httpRequest = {
      body: {
        totalMinutes: 10,
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should return 400 if no totalMinutes is provided', async () => {
    const sut = new AddChildController()
    const httpRequest = {
      body: {
        name: 'any_name',
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})