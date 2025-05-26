import express, { Request } from "express";
import { app } from "../init";
import { AccountController } from "./controller/AccountController";

const accountController = new AccountController()

const router = express.Router()


router.post('/login',accountController.getAccountDetail);

export default router
