const express = require('express')
const app = express()
const cors = require('cors');
const router = require('./router/route')
const port = 5000
require("./Database/conn")


app.use(cors())
app.use(express.json())
app.use('/durgesh', router)


app.listen(port, ()=>{
    console.log(`server connected to http://localhost:${port}`)
})