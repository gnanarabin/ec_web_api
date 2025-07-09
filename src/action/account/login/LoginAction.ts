import { BusinessException } from "../../../business/BusinessException"
import { DbAction } from "../../../db/db_update/InsertValue"
import { user } from "../../../db/models/userAccount"
import { LoginCredentials } from "../../../interface/account/Login"
import { Validation } from "./Validation"

export class LoginAction {

    loginValidation = new Validation(this)
    dbAction = new DbAction()



    getUserDetails = async (params: LoginCredentials) => {

        if (!this.loginValidation.isvalid(params)) {
            throw new BusinessException("invalid Credentials")
        }

        console.log(params);

        let existingUser = await user.findOne({ name: params.username })

        if (existingUser) {
            throw new BusinessException("User Already Exists")
        }

        const newUser = new user({
            name: params.username,
            password: params.password
        })

        await this.dbAction.insertOne(newUser)

        return newUser



    }
}