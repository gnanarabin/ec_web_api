import express, { Response } from 'express';
import cors from 'cors'
import accountRouter from './src/app'

export const app = express()

const port = 4000;

app.use(cors());
app.use(express.json())



app.use('/web/account',   accountRouter)






app.listen(port, () => {
    console.log("EC_Web_Api Listening..." + port);

})