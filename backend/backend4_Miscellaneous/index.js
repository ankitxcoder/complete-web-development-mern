// server side code 
const express=require("express");
// creating app 
const app=express();
// craeting port 
const port=8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{  
    res.send("welcome to get response");  
});

app.post("/register",(req,res)=>{
    let {username,password}= req.body;
    res.send(`welocome ${username}`);
})
// listen port
app.listen(port,()=>{
    console.log(`app is :listening ${port}`);
});