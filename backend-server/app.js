const express = require("express")
const cors = require('cors')
const app = express()
const port = 5000
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/profileApp', ()=>{
    console.log("connected to mongodb")
});
app.use(express.static('/public'))
app.use(cors())
app.use(express.json())
app.use('/api/auth', require('./routes/userRouter'))
app.use('/api/profile', require('./routes/profileRoute'))


app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(port, ()=>{
    console.log("server is running")
})