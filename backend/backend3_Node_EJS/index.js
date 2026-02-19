const express = require("express");
const app = express();

const port=8000;
app.set("view engine", "ejs"); //np need to require ejs bcz express internally require ejs

app.get("/", (req,res)=>{
    res.render("home.ejs");
})

app.get("/dice", (req,res)=>{
    let ranNo=Math.floor(Math.random()*6)+1;
    res.render("home.ejs", {ranNo});
})
app.listen(port, ()=>{
    console.log(`listening on port  ${port}`);
});


