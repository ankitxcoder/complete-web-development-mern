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

- npm init --> **npm install express --> **then require express(in index.js)--> **execute express & store in app --> **listen the server by app.listen --> **for listen give ( port ) --> **then pass port & function to listen
- Code:-
  // require express
  const express= require("express");
  //execute express and store in app
  let app= express(); //this is a object --> return object
  // listening server
  // port
  let port=3000;
  app.listen("port",()=>{
  console.log(`app is listening at: ${port} `);
  })

# 3 Handling request

- app.use() --> app is a object --> use() is method of app object
- use() --> listen all type of request and execute callback function --> app.use((req,res)=>{})
- Parameter Meaning
  request (or req) Information coming from the client (browser/app)
  response (or res) Object used to send a reply back to the client

- // hopscotch se request bejnegye th print hoga --> mtlb request aa gya client se
  app.use((request,response)=>{
  consolelog(request); ---> this will print object
  console.log("request recieved");
  })

# 4 Sending Response

- request and response are object ( these are inside parameter)
- All http request are text based initially but express convert them in a object --> so that js can undrestand it.
- Express documentation --> response --> there i will see how to send response
- response.send( here ); --> in here i can send "text" , {object} ,"html" etc in response

- res.send() is perfect for:
  text
  HTML
  files
  strings
- res.json() for JSON


# 5 Routing 
- same path ke liye ek he response hoga 
- routing is a process of slecting a path for traffic in a network or between or across multiple networks
### 5.1 app.get()
- Syntax:- 
           app.get("/path",(request, respond)=>{ respons.send("hi"); });
           .get("/path",(req,res)=>{}) --> .get will accept request from single path only
           .use()  ------->accept request from all path
### * to get un match path request
           // route not exist then custom response or standard response
           app.get("*".())  ---> * mtlb ydi upr wala path ni mila th ye wala response jaye 

### 5.2 app.post()  ----> post will used when client send data to the server ( like forms , signup , adding items etc)
- app.post("/",(req,res)=>{  
   console.log("");
})

# 6 Nodemon
- to automaticaly restart the server with code changes
- its a package  


# 7 Path parameters
- path ke varibale vlaue set kr skte hai ye variable change hota rhta hai --> called path parameters
- define path variable
-   :username  --> eske information request ke andar save hogi --> by (req.param )


# 8 Query Strings 
- parameter ke andar jo hm additional request bejte hai in the form of query stings oo strings app.js me ( request object  )  me ( request object ke query parameter ) ke andar aa kr store ho jata hai 