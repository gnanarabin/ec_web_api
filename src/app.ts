import express, { Request } from "express";
import { app } from "../init";
import { AccountController } from "./controller/AccountController";
import { Authendication } from "./middleware/authendiate/authendication";

const accountController = new AccountController()
const authendication = new Authendication()

const router = express.Router()


router.post('/login', authendication.authendication, accountController.toLogin);

export default router
