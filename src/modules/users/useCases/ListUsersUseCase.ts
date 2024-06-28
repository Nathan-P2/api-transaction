import { ListUsersDTO } from "./dtos/list-users-dto"

interface ListUsersUseCaseInterface {
  getUsers(): Promise<ListUsersDTO[]>
}

export class ListUsersUseCase implements ListUsersUseCaseInterface {
  async getUsers(): Promise<ListUsersDTO[]> {
    return [{
      user_id: 1,
      user_email: 'user@example.com',
      user_name: 'userName',
      user_created: new Date(),
      user_updated: new Date(),
    }]
  }
}