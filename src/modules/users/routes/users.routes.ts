import { Router } from "express";
import { makeListUsersController } from "../factories/ListUsersControllerFactory";

const userRouter = Router();

userRouter.get('/users', makeListUsersController().handle)