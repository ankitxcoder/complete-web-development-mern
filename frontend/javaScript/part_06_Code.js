// craeting function

function hello(){
    console.log("this is function");
}

hello();
hello();

function printName(name, age){
    console.log("name is :"+ name +", age is :" +age );
}
printName("ankit", 24);
printName("Ankit "); // name is :Ankit , age is :undefined 
// here age is undefined

console.log("----------------------------------------------");

// return Keyword
function isAdult(age)
{
    if (age>=18){
        return "adult";
    } else{
        return "not adult ";
    }
    console.log("not reachable as we had returned alredy");

}
console.log(isAdult(10));
console.log();

console.log("----------------------------------------------");

// fight function and global scope 
console.log("fight function and global scope ");
let ager = 25;
function isAdultr()
{
    let ager = 20;
     console.log("inside the function: " + ager);
}
  console.log("Ooutside the Function : "+ager);

  isAdultr();

  
  // Lexical Scope
  function outerFunc(){
    let x=5;
    let y=10;
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
innerFunc();
  }
outerFunc();  // return statement ni hai th console lgane pe undifined bhe ayega   

console.log();  
// Functions Expression 

let sum = function(a,b){
    return a+b;
}
console.log(sum(1,2));
console.log("----------------------------------------------");

// Higher order function --> Greet multiple time by takig function and no. time to call function
function multiGreet(func,count)
{
    for(let i=1;i<=count;i++)
    {
        func();
    }
}
//let greet= function(){
  // console.log("hello babu");
//}
//multiGreet(greet,5);
multiGreet(function(){ console.log("hello babu")},5);

console.log("----------------------------------------------");

// Higher Order function --> return new new function
function oddEvenFactory(request)
{
    if (request=="odd")
      {
        let odd= function(n)
        {
          console.log(!(n%2==0));
        }
          return odd;
      }else if(request=="even")
      {
        //   let even=function(n){
          return function(n){
          console.log(n%2==0);
        }
       // return even; 
      }else {
        console.log("Wrong request");
      }
}

let request="odd";
let fnc=oddEvenFactory(request);
fnc(4);  //--> false that means not odd 
console.log("----------------------------------------------");

// Methods
// Key- value pair --> object ke andar function --> known as Method

const calculator = {
  num:55,
  add: function(a,b) 
    { 
      return a+b;
    },
  sub: function(a,b)
    {
      return a-b;
    },
  mul: function(a,b)
    {
      return a*b;
    }
};
console.log(calculator);
console.log(calculator.num);
console.log(calculator.add(1,2));
// shorthand for method --> function word ni likhengye 

const shorthandCalc= {
  add(a,b)       //--> no function keyword is ude --> add is func name 
   {
    return a+b;
   },            //---> seperated by comma
  sub(a,b)
   {
    return a-b;
   },
  mul(a,b)
   {
    return a*b;
   }
};
console.log(shorthandCalc.add(12,4));
console.log(shorthandCalc.sub(2,2));

console.log("----------------------------------------------");

