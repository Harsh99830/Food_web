const express = require('express')
const app = express()
const port = process.env.PORT ||5000

const db = require('./mongoose')
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.get('/', (req,res)=>{
    res.send("hello world")
})
app.use(express.json())
app.use('/api',require('./Routes/CreateUser'))
app.use('/api',require('./Routes/DisplayData'))
app.listen(port,()=>{
    console.log(`server is listening on the port ${port}`)
})
