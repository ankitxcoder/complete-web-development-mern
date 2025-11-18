# 1 Express 
- lets understand what is Library and framework
#### 1.1 Library 
- a library is a collection of pre written code that can be used to perform specific task 
 Eg:- axios
#### 1.2 framework
- a framework is a set of pre written code that provide a structure for developing software applications
  Eg:- Express

- express ek node.js web application framework hai jo help krta hai to make web applications
- it is used for server side programming 
- express need to install from node.js


# 2 Getting Started With Express
- npm init --> __npm install express --> __then require express(in index.js)--> __execute express & store in app --> __listen the server by app.listen --> __for listen give ( port ) --> __then pass port & function to listen
- Code:-
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



# Handling request
- app.use()  --> app is a object --> use is method of app object
- use()  --> listen all type of request and execute callback function --> app.use((req,res)=>{})
- Parameter	Meaning
   request (or req)	Information coming from the client (browser/app)
   response (or res)	Object used to send a reply back to the client