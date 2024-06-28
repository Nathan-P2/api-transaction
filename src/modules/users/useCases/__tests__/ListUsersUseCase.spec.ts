import { ListUsersUseCase } from "../ListUsersUseCase"

const makeSut = () => {
  const sut = new ListUsersUseCase();
  return {
    sut
  }
}

describe('Tests for listUsersUseCase', () => {
  it('should be able to return a existing listUsersUseCase', () => {
    const { sut } = makeSut();

    expect(sut).toBeInstanceOf(ListUsersUseCase)
  })
})