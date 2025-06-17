import { NextFunction, Request, Response } from "express";
import { LoginAction } from "../action/account/login/LoginAction";

export class AccountController {
  login = new LoginAction()

  toLogin = async (req: Request, res: Response): Promise<any> => {
    let params = req.body
    return this.login.getUserDetails(params)
  }
}