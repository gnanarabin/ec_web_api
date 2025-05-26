import { NextFunction, Request, Response } from "express";
import { LoginAction } from "../action/account/LoginAction";

export class AccountController {
    login = new LoginAction()

    getAccountDetail = async (req: Request, res: Response): Promise<any> => {
        try {
            console.log(req.body);
            return res.json({ message: 'success' });
          } catch (error) {
            console.error("Error in login:", error);
            return res.status(500).json({ message: 'Internal Server Error' });
          }
    }

    getUserAcc = async (req:any,res:any,next:NextFunction) => {
      let body = req.body
      return this.login.getUserDetails(body)
    }
}