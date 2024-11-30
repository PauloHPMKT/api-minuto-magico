import { AddChildController } from "./add-child.controller"

describe('AddChild Controller', () => {
  it('Should be defined', () => {
    const sut = new AddChildController()
    expect(sut).toBeDefined()
  })
})