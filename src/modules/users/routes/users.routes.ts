import { Router } from "express";
import { ListUsersController } from "../controllers/ListUsersController";

const userRouter = Router();

const listUsersController = new ListUsersController()

userRouter.get('/users', listUsersController.handle)