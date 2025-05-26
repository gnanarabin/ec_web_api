import express, { Response } from 'express';
import cors from 'cors'
import mongoose from "mongoose"
import accountRouter from './src/app'

export const app = express()

const port = 3010;

app.use(cors());
app.use(express.json())


mongoose.connect("mongodb://localhost:2000/")
    .then(() => {
        console.log("DB Connected");

    }).catch((err) => {
        console.log(err);
        
    })



app.use('/web/account', accountRouter)






app.listen(port, () => {
    console.log("EC_Web_Api Listening..." + port);

})