const express = require("express");
const PORT = 3000

const app = express();

let items=["cat food"];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("welcome!")
})

app.get("/api/items",(req,res)=>{
    res.json(items);
})

app.post("/api/items",(req,res)=>{
    console.log(req.body.item);
    items.push(req.body.item);
    res.send(req.body.item)
})

app.delete("/api/items",(req,res)=>{
    items = [];
    res.send("list cleared!")
})

app.listen(PORT,()=>{
    console.log('listening on port '+ PORT)
})