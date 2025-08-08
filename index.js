const express = require('express')
const PORT = 1208;
const app = express();
app.use(express.json()) //parse json
app.get("/",(req,res)=>{
    res.send("hello world,this is sam")
    })
console.log("Hello from server")
app.listen(PORT, ()=>{
console.log(`welcome to hello world: running in : http://localhost:${PORT}`)
})