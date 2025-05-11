import { app } from "../init";

app.get('/web/login',async(req:Request,res:any)=>{
    console.log(req.body);
    
})