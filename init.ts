const express = require('express')

export const app = express()

const port = 4000;


app.listen(port, () => {
    console.log("EC_Web_Api Listening..." + port);

})