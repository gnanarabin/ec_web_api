import { LoginCredentials } from "../../../interface/account/Login";
import { _Utils } from "../../../utils/_utils";
import { HelperChild } from "./helper";

export class Validation extends HelperChild {

    isvalid = (params: LoginCredentials) => {

        if(_Utils.isEmpty(params.username)){
            return false
        }
        return true
    }

}