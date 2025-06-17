import { Message } from "../interface/Message";

export class BusinessException extends Error {
    constructor(message: string) {
        super(message);          
        this.name = 'BusinessException';
        Error.captureStackTrace(this, this.constructor); 
    }
}