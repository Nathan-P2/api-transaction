import { Controller } from "@src/interfaces/controller-interface";
import { ListUsersController } from "../controllers/ListUsersController";

export const makeListUsersController = (): Controller => {
  const controller = new ListUsersController();
  return controller
}