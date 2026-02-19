# async Functions

- asynchronous(multiple task at one time seems) work ke code ko easily understable bnata hai
- async and await keywords

# async Keyword

- async return promise irespective of we return promise or not --> hence it return promise so ( .then() and .catch() can apply)
- Eg:-
-         async function greet()
         {
           // throw "there is an error";
            return "greet hellow";

         }

  greet()
  .then( (result)=> {
  console.log("greet promise was resolved");
  console.log("greet result is : ", result); // reuslt is hello here
  })
  .catch( (err)=>{
  console.log("greet promises was rejected with err: ", err); // error is --> there is an error
  });

# await Keyword

- async function ke andar likha jata hai
- await keyword jis function call ke samne likha gya ,, jbtk oo call execute ( resolve()) ni ho jata tbtk --> dushra function wait krega execution ke liye
- asynchronous code ko clean aur easy to understand bnata hai

- Eg:-
  function getNum() {
  return new Promise((resolve,reject)=>{
  setTimeout( ()=> {
  let num=Math.floor(Math.random()\*10)+1;
  console.log(num);
  resolve();
  },1000);
  });
  }

         async function demo(){
           await getnNum();  // ---> await inside the async fucntion
           await getNum();   //  --> jbtk ye function execute ( resolve() ) ni hoga tbtk next function execution start ni hoga
           await getNum();
           await getNum();
         }

- pseudo code
- function what hto perform what have to do --> like genearting number or changing color
- then async function (name anything )--> then pass function and use await keyword

# Handling Rejections

#### 1 make function awhich can through---> promise reject

- function getNum() {
  return new Promise((resolve,reject)=>{
  setTimeout( ()=> {
  let num=Math.floor(Math.random()\*10)+1;
  if(num>3){ ------------------------> here it can give rejcetion ( promise reject )
  reject("promise rejected);
  }
  console.log(num);
  resolve();
  },1000);
  });
  }

#### 2 Promise rejection Occurs then rest code will not execute

-       async function demo(){
             await getnNum();  // ---> no rejection yha tk th next code will execute
             await getNum();   // ---> promise rejection yha aaya eske baad wala code execute ni hoga  ---> problem
             await getNum();
             await getNum();
         }

#### 3 Solved this problem by try-catch

-        sync function demo(){
            try(
             await getnNum();
             await getNum();   // --> promise rejection aaya th bhe next code execute hoga
             await getNum();
             await getNum();
             )catch(err){
              console.log("error is :-",err);
             }
         }

# API

- Application programming interface
- simple its waiter or url( end point ) which return json data or data

#### Accessing Some API

- https://bored-api.appbrewery.com/random
- catfact.ninja

# JSON

- JSON is the string FORMAT
- JavaScript Object Notataion
- keys are String
- there is no undefined data
- json validator ---> json format is valid or not

# Accessing json data

- Accessing Data From Json

#### JSON.parse( data ) method -----> To parse a String data into a JS Object

#### JSON.stringify( json ) method -----> To parse a JS Object data into JSON

# API Testing request

- Tools
- Hoppscoth ->> no need ton install website
- postman --> need to download

# Ajax

- Asynchronous JavaScript and XML
- tAjax means we calling API --> this call work Asynchronous ( koi jruri ni jb request gya tbhi answer aa jaye ,, time lgg skta hai ) --> hmare pass response aata hai ( JSON me ) jiske sath hm deal krte hai
- Xml me response ni aata , JSON me aata hai

# HTTP Verbs

- GET --> to take any data ,, to access data
- POST --> to send data, to post data
- DELETE --> to delete

# Status Codes

- 200 --> ok
- 404 --> we call wrong api endpoint ( Not Found )
- 400 --> BAd request
- 500 --> internal server bad request
- read from mdn

# Adding Infrmation in URL

- in url/:id
-         : num
-         :q
-       {{id}}    ====> :id --> replace by any valid value

- jo key value pair inside url extra key vlaue pair ---> ye url ke dwara egnore kr deya jata
- eg ?name=akit&marks=100 ---> &marks=100 this is extra info so egnore

# HTTP Header

- header, value
- inside Header --> can be send API response format which type we want like accept ?
- value ---> inside it we can whch type of data we want like html ? raw ? or json data format
- inside header --> can send Meta Data

# Our First request

- js api call ka result ka wait ni krta --> baad wala code execute ho jata hai ---> asynchronous work
- uisng Fetch
- fetch(url) --> return one promise
- Code :-
-          let url = "https://catfact.ninja/fact";
           fetch(url)
            {
              .then((result)=>
                {
                  console.log(result);   //---> unreadable data coming
                  return result.json();  //---> parse data to json data so that we can read it  --> this will return promise
                })
                .then((data)=>
                   {
                    console.log("data is",data.fact);
                   })
                .catch( (err)=>
                   {
                    console.log("error", err);
                   });
            }
- Code 2
-        let url = "https://catfact.ninja/fact";
fetch(url)
  .then((result) => {
    console.log(result); //---> unreadable data coming
    return result.json(); //---> parse data to json data so that we can read it  --> this will return promise
  })
  .then((data) => {
    console.log("data 1", data.fact);
    return fetch(url);   // second API call
  })
  //parse to json
  .then( (result)=> 
   {
    return result.json();
   })
  .then((data2) => {
    console.log("data 2 :", data2.fact);
  })
  .catch((err) => {
    console.log("error", err);
  });



  # using Fetch with async-await
  - let url = "https://catfact.ninja/fact";
    async function getfetch()      //--> async
    {
      let res= await fetch(url);   //--> await to wait to scomplete 
      let data= await res.json;   // parse to json
      console.log(data);
    }
    for error use try catch 