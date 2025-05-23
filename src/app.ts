import express, { Request } from "express";
import { app } from "../init";
import { AccountController } from "./middleware/AccountController";

const accountController = new AccountController()

const router = express.Router()


router.post('/login',accountController.getAccountDetail);

export default router
