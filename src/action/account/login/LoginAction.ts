import { BusinessException } from "../../../business/BusinessException"
import { LoginCredentials } from "../../../interface/account/Login"
import { user } from "../../../models/userAccount"
import { Validation } from "./Validation"

export class LoginAction {

    loginValidation = new Validation(this)



    getUserDetails = async (params: LoginCredentials) => {

        if (!this.loginValidation.isvalid(params)) {
            throw new BusinessException("invalid Credentials")
        }

        console.log(params);

        let existingUser = await user.find({ name: params.username })

        if (!existingUser) {
            throw new BusinessException("Invalid User")
        }

    }
}