import { Request, Response } from "express";
import { app } from "../init";

app.post('/web/login',async(req:Request,res:Response)=>{
    console.log(req.body);
    
})