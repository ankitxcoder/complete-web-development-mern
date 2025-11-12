# async Functions
- asynchronous(multiple task at one time seems) work ke code ko easily understable bnata hai
- async   and   await keywords

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
      console.log("greet result is : ", result);  // reuslt is hello here 
    })
    .catch( (err)=>{
      console.log("greet promises was rejected with err: ", err);  // error is --> there is an error
    });


# await Keyword
- async function ke andar likha jata hai 
- await keyword jis function call ke samne likha gya ,, jbtk oo call execute ( resolve()) ni ho jata tbtk --> dushra function wait krega execution ke liye
- asynchronous code ko clean aur easy to understand bnata hai

- Eg:- 
         function getNum() {
          return new Promise((resolve,reject)=>{
            setTimeout( ()=> {
              let num=Math.floor(Math.random()*10)+1;
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
#### 1 make  function awhich can through---> promise reject
-   function getNum() {
          return new Promise((resolve,reject)=>{
            setTimeout( ()=> {
              let num=Math.floor(Math.random()*10)+1;
              if(num>3){                 ------------------------> here it can give rejcetion ( promise reject )
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



