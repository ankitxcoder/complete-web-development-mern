# Function  
- Function Defination --> telling JS 

- function functName(){
    // do somethings 
- }

 function Calling ( using the function)
- funcName();

# Function with argumemnts
- value we pass to the Function 
- function funcName(arg1, arg2){
    // do somethings
}

- Passing argumnet Order is important as we how we pass oerder is maintain and  if we not passs any value  (argumnet) then it will remain undefined 

 # Return KeyWord
 - ek baar function return ho gya fir uske baad wala code work ni krta hai 
 - for multiple return --> store in a dataSet like Array or object and then return 

 # what is Scope
 - Scope mtlb hm apne code kha kha se access kr kte hai 
 - Function scope 
 - Block Scope 
- Lexical Scope 

### Function scope 
- function ke andar ka declared variable --> sirf function tk he valid/ access hau 
- when global and function scope fight --> they are different 
- varibale inside the function is differnt --> then global variable

# Block Scope
- only applied on ( let and const )  --> not applied on ( var )
- {  }  --> eske andar defined varivale bhr se access ni kiya ja skta 
### Note -->
- { var name="";}  --> var is accesible out side the {} this but let and const varivale can't


# Lexical Scope
- ek function ke andar vaible define fir uske baad same function ke andar ek aur function define --> aur inner functione me outer function ke varibale ko print krengye --> then inner function ko call mtlb sirf call not print --> fir jb hm outer function ko call krengye print th oo inner function me likha gya code varibale print ka print kr dega 

- mtlb inner wala varibale ko access kr skta pr opposite is not work

# Function Expression 
- Name less function 
- varibale me function ko store krayengye aur function name ni dengye 
- calling way --> variable name ke sath (); --> th function call hoga 
- parameter bhe de dengye 


# Higher Order Function 
- A function that does one or Both 
-- take one or multiple function as arguments 
-- return a function 
- ex see in code 

# Methods 
- Jo functions --> Object ke andar define hota hai --> hm unhe Method bolte hai
- Action that can be performed on an object --> action written in Key-value pair 
- ( , ) --> comma se seperate rhega method --> object ke andar method ko likhengye
### Shorthand for Method 
- function use ni krke sb likh skte hai 
