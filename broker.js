
const express=require('express');


const app=express();
app.use(express.static("METROSERVER"));

app.listen(process.env.PORT || 5000,()=>{
    console.log("port listened");
})


app.get("/subscriber",(req,res)=>{
     res.sendFile(__dirname+"/subscriber.js");
})

app.get("/display",(req,res)=>{
     res.sendFile(__dirname+"/index.html");
})

