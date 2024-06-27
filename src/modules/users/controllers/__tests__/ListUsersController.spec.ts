import { ListUsersController } from "../ListUsersController"

type SutTypes = {
  sut: ListUsersController
}

const makeSut = (): SutTypes => {
  const sut = new ListUsersController()

  return {
    sut
  }
}

describe('Test ListUsersController', () => {
  it('should be able to return a existing controller', () => {
    const { sut } = makeSut()

    expect(sut).toBeInstanceOf(ListUsersController)
  })
})