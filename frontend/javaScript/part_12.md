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