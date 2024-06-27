import { Router } from "express";
import { ListUsersController } from "../controllers/ListUsersController";
import { makeListUsersController } from "../factories/ListUsersControllerFactory";

const userRouter = Router();

userRouter.get('/users', makeListUsersController().handle)