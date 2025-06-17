import { BusinessException } from "../../../business/BusinessException"
import { LoginCredentials } from "../../../interface/account/Login"
import { Validation } from "./Validation"

export class LoginAction {

    loginValidation = new Validation(this)



    getUserDetails = (params: LoginCredentials) => {

        if (!this.loginValidation.isvalid(params)){
            throw new BusinessException("invalid Credentials")
        }

        console.log(params);
        


    }
}