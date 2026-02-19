# This KeyWord
- This --> Keyword refer to an Object that is executing the current Piece of code
- this basically refer krta hai object ke key value pair ko 
- Need --> object ke andar hm method se key value of object ko access ni kr skte hai th hm this keyword ka use krengye aur access kr lengye 

# Try catch 
- Try --> which can give error 
- catch --> (err ) now error is catched and can be printed

# Miscellaneous Topics

# Arrow function 
- similiar to function ---> sirf function ni use hota hai --> arrow use hota hai 
- see code 
- if there is only one Argument then no need to give parrenthesis 
- eg : const square = n => {console.log(n*n);};
- if no argumnet then ( ) is necessary --> const square = () => {console.log("Hello");};
- single value retun ya parameter me ---< Paranthesis () -> optional ho jata hai 
- const square = () => hellow ;

# setTimeout
- setTimeout(function, timeout--> milidecond )  =====> ETNE TIME baad function run hoga
- setTimeout(--> se code run rukta ni hai )  mtlb alg se run hota rhta hai pr code alg run hota rhta hai

# setInterval
- ye set time baad hrr baar function ko print krega fir ussi time baad print krta rhega
- setInterval( function , timeOut)     aisa code hai 
- eg:- code 
  
## Important 
- function ka jo this hota hai-->  unka scope hota hai ki unhe koin call kr rha hai --> ye unpr khud pr he depend krta hai
- Arror function ke liye LEXICAL SCOPE use hota hai --> parrent ka jo scope hota hai whi --> arrow function inherit kr leta hai apna parrent se
 
# This with Arrow function
- Normal this 
-- function--> this --> here also this call by window object (but if only function  then this look for who call him and thn this is of who call him)
-- Arrow function --> this --> here this is also call by window object but here this will look for his calling function parrent  --> his parrent and --> then parrent ka this print ho jayega

