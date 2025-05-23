import { Request, Response } from "express";

export class AccountController {

    getAccountDetail = async (req: Request, res: Response): Promise<any> => {
        try {
            console.log(req.body);
            return res.json({ message: 'success' });
          } catch (error) {
            console.error("Error in login:", error);
            return res.status(500).json({ message: 'Internal Server Error' });
          }
    }
}