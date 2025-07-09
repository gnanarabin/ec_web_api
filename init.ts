import express, { Response } from 'express';
import cors from 'cors'
import mongoose from "mongoose"
import accountRouter from './src/app'
import morgan from "morgan";


export const app = express()

const port = 3010;


// app.use(morgan('combined'))
app.use(morgan("dev"));
app.use(cors());
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/e_commerce")
    .then(() => {
        console.log("DB Connected");

    })
    .catch((err) => console.error("DB Connection Error:", err));



app.use('/web/account', accountRouter)






app.listen(port, () => {
    console.log("EC_Web_Api Listening..." + port);

})