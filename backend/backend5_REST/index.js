const express = require("express");
const app= express();
const port= 8000;
const path=require("path");


app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

let posts=[];
let id=1;

//ejs view engine --> views --> index.js
app.get("/posts",(req,res)=>{
    res.render("index",{posts:posts});
});

app.get("/",(req,res)=>
{
    res.send("hi man get routes working");
});

app.post("/posts",(req,res)=>
{
    const {username,content} = req.body;
    const newPosts={
        id: id++,
        username,
        content
    };
    posts.push(newPosts);
    res.redirect("/posts")
})

app.post("/post/new",(res,req)=>
{
  res.render("posts")
})
app.listen(port,()=>{
    console.log("port is running");
})

