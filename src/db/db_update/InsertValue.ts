import { ILoginParams } from "../../interface/db/ILoginAction";
import { user } from "../models/userAccount";

export class DbAction {
    public async insertOne(data: ILoginParams) {
        const newUser = new user(data);
        return await newUser.save();
    }
}