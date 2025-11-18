// require express
const express= require("express");
//execute express and store in app
let app= express();  //this is a object --> return object
// listening server
// port 
let port=3000;
app.listen("port",()=>{
    console.log(`app is listening at: ${port} `);
})

// hopscotch se request bejnegye th print hoga 
app.use((request,response)=>{
    console.log("request recieved");
})