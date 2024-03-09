const express = require('express')
const cors = require('cors')
const db =require('./db')
const app = express()

//routes
const mainRouter = require('./routes/index')
const port = 3000

app.use(cors());
app.use(express.json());

app.use('/api/v1',mainRouter);

app.get('/',(req,res)=>{
    res.send("hiiiiiii");
})

app.listen(port,()=>{
   db.once('open' ,()=>{console.log("db connected")}).on('error',(err)=>{
    console.log(err)
})
})