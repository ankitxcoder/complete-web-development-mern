# Call Stack
- this is the Data Structure -> it tells which function is in calling state now
- first called function store in down of stack and currently call function store at upper of stack --> once excetion of that function copmpleted then that function stack also get removed



# Breakpoints
- use in debuging --> that which function is executing 
- in dev --> source -->  can add break points and see stack and with arrow down can debug code --> which function is executiong when



# JS is Single Threaded
- Single Threaded --> at one time only one task execute in js
- JS is a single threaded ( Synchoronous nature )
- setTimeout( function()   -------------> First setTimeout 
       {
          console.log("hello");
       },2000);
- setTimeout( function()   --------------> Second Timeout
       {
          console.log("hello");
       },2000);

- First and second setTimeOut function will send to browser by js and rest code executing and when time reach then browser will send that setTimeout function to the stack to get exectue by js 
- when js see in stack it execute one by one very fast seems to be execute at one time but it execute one by one


# Callback Hell 
- nesting hoti hai callback ki
- ek checj hone(execute) ke baad he dushra chhej ho(execute) --> and so on
- see CODE iN TODO APP ( MINIPROJECT)
- CODE :- 
- let h1= document.querySelector("h1");
- function changeColor(color,delay,nextColorChange){
  setTimeout( ()=> {
    h1.style.color=color;
    if(nextColorChange) nextColorChange();   //--> If nextColorChange is defined (not null or undefined), then call it
  },delay);
}

changeColor("red",2000, ()=>{
             changeColor("green",2000,()=>{
              changeColor("orange",2000,()=>{
                changeColor("blue",2000)
              });
             });
            });



# Promises
- the Promises Object represnt the ( success ) eventual completation ( or failure ) of an asynchronous opertaion and its resulting value. 
- Promises  -> take 2 argument
- 1 --> resolve  ( sucess )
- 2 --> reject   ( failre )
- promises give object 
- state --> reject 
        --> pending 
        --> fulfilled

#### Understand First what is Callback Hell
- function saveToDb(data,success,failure)
 -->  internet speed variable
 -->  if(speed>4){
          sucess();
 -->   }else{
          failure();
      };

- saveToDb("Data 1", ()=>{ concole.log("sucess 1"), saveToDnb("Data 2", ()=>{ console.log("Sucess 2")},()=>{failure 2}); },()=>{failure 1}; );

### In promises how we should do above code 
- function saveToDb(data,success,failure)   ---> ye sb nhi rhega
- Aise hoga
- function saveToDb(data){
    return new promise( (resolve,reject)=>{
        internet speed variable.
        if(internet speed>4){
            resolve("success: data saved ");
        }else {
            reject("failure : weak conection");
        }
    });
}


# then()  and catch()  methods 
- promise is object --> then it will have some method knwn as then() and catch()
- then() --> if promises is rsolve then --> do this 
- catch()  --> if promises is reject --> then catch error and do this 
- CODE :- Best way 
- saveToDb("data")
    .then( ()=> {
        console.log("promises was resolved");
    })
    .catch( ()=> {
        console.log("promises was rejected");
    });

- also can do like this  by storing in variable and then do 
  let request=saveToDb("data");      /// request is the promises object
     request
     .then()
     .catch();
- this all will print Promise object with meassage 


# Promise chaining 
- saveToDb("data")
       .then( ()=> {
          console.log("data 1 saved ");
          return saveToDb("Hello world");
       })
       .then( ()=>{
          console.log("data 2 saved");
          return saveToDb("3rd data");
       })
       .then( ()=> {
          console.log("dtaa 3 saved");
       })
       .catch( ()=> {
          console.log("promises was rejected");
       });

- here .then() --> multiple time like --> try()
- here .catch()  --> will write only one time --> like Catch()  --> catch all error occurs from any promises


# Results & Errors in Promises
- result is argument pass to --> then()  method 
- error is argumnet pass to --> catch() method
- saveToDb("data")
       .then( (result)=> {         ------------- result is argumnet
          console.log("data 1 saved ");
          console.log("result of promises",result);   ----> result is printing 
          return saveToDb("Hello world");
       })
       .then( (result)=>{
          console.log("data 2 saved");
          console.log("result of promises", result);
          return saveToDb("3rd data");
       })
       .then( (result)=> {
          console.log("dtaa 3 saved");
          console.log("result of promises", result);
       })
       .catch( (error)=> {           ---------------------- error is argument 
          console.log("promises was rejected");
          console.log("error promises", error);   ---> error is printing 
       });



# Refactoring Old Code 
- function changeColor( color, delay ){
    return new Promise( (resolve,reject)=> 
      {
           setTimeout( ()=>
           {
            h1.style.color=color;
            resolve("color change");
           },delay);
       });
}

   changeColor("red",2000)
       .then( 
        ()=> {
        console.log("red color was completed");
        return changeColor("orage",2000);
             }
          )
          .then( ()=>{
            console.log("orange color was completed");
            return changeColor("blue",2000);
                     }
          )
          .then( ()=> {
            console.log("blue was completed");
            ret
          });

- this change color code --> done from Promises ( enhance code ) 


