//  Array MEthod 
console.log("-----------------forEach -----------------");
let arr=[1,2,3,4,5 ];

// let print=function(el){
//     console.log(el);
// };
arr.forEach( function(ell){
    console.log(ell);
});
console.log("2nd method of above code");
arr.forEach((el)=> {console.log(el);});
// arr.forEach(print);

//  doing for Each on array object 
let arrrr = [
 {
    name:"Ankit ",
    rollno:24
 },{
    name: "Ram",
    rollno:20
 },{
    name:"shyam",
    rollno:25
 },
];
arrrr
arrrr.forEach((student)=> console.log(student));
arrrr.forEach((student)=> console.log(student.rollno));


console.log("-----------------map and filter  -----------------");
let newArrGpa= arrrr.map( (el)=>{ return el.rollno/10;});  //Each element of arrrr is an object like { name: "Ankit", rollno: 24 },
//so you must access it as a property of el --> el.rollno/10
console.log("gpa is : ",newArrGpa);

// filter 
let arrs=[1,4,8,5,2,4,5,7,8];
let even=arrs.filter( (arrs)=>{ return arrs%2==0});
// let even=arrs.filter( (arrs)=>(arrs%2==0));
console.log("even is :", even);

console.log("-----------------Every/some-----------------");
let arr1=[2,4,6];
let resArr1=arr1.every((el)=>(el%2==0));  // every
let resArr1a=arr1.some((el)=>(el%2==0));  // some
console.log(resArr1);  // all elemt are even so true if one odd tehn answer will be false
console.log(resArr1a);

console.log("-----------------Reduce method-----------------");
let nums= [1,2,3,4,5];
let arrSums= nums.reduce( (accumulatorrr,element)=>{console.log(accumulatorrr); return accumulatorrr+element});
console.log(arrSums);

console.log("-----------------Maximum in Array-----------------");
// by Loop 
let ar1=[1,2,3,4,5,6,7,8,9,15];
let startMax=ar1[0];
for (let i =0;i<ar1.length;i++)
{
   if(startMax<ar1[i])
   {
      startMax=ar1[i];
   }
}
console.log(startMax);

// by .reduce method --> appling on above ar1
let reduceMethod=ar1.reduce( (max,el)=>{if(max<el)
{
   return el;
}else 
{
   return max;
}
});
console.log(reduceMethod);

console.log("-----------------Default Parameter-----------------");
function func(a,b,c=2){
     return a+b+c;
};
console.log(func(1,2));

console.log("-----------------Spread-----------------");
let arr87=[1,2,3,4,5,6,7,8,9];
console.log("min no. from array is: ",Math.min(...arr87));
console.log("without spread : --> ",Math.max(arr87));  //---> NaN result as it cant see individual element --> need to spread
console.log("max no. from array is: ",Math.max(...arr87));

console.log(..."ankit kushwaha    ");

console.log("-----------------Spread ( Array Literals )-----------------");
let arr95=[1,2,3,4,5,6,7,8,,];
console.log(...arr95);
let arr97=[1,2,3,4,5,6];
console.log(...arr97, ...arr95);   // order is imprtant 
//order importamce
console.log(..."Ankit",  ..."kumar");

console.log("-----------------Spread ( Object Literals )-----------------");
const obj1={
   email: "ankitdemo@gmail.com",
   password: "abcd",
};
console.log("obejct 1 :", obj1);
let new_obj1_copy ={...obj1, country: "India"};   // adding data to obect 
console.log("after adding (country) and copy Object data: ",new_obj1_copy);

// array to object
let arr112=[1,2,3,4,5,6,7,8];  // value
let obj113 = {...arr112};
console.log("Array to object: ",obj113);

console.log("----------------- Rest -----------------");

function sum(...argum){
   return argum.reduce(( add,el )=> (add+el));
}
console.log(sum(1,2,3,4));

// lets make max function 
function max(...args)  //...args store element as collection 
{
    for(let i=0; i<args.length; i++)
    {
      console.log("give name : ",args[i]);
    }
}
max(10,5,100);  

// understanding argumnet is collection not array 
function fun134(...argumenttss) {
  // argumenttss is a real Array created by the rest syntax
  console.log("at index what pushed 10: ", argumenttss.push(10)); // push returns the new length
  console.log("argument collection length is: ", argumenttss.length);
}
fun134(1, 4, 5);

//random example 
function Apnamax(...argss){
   return argss.reduce((max,el)=>{
      if(max>el){
         return max;
      }else{
         return el;
      }
   });
};
console.log(Apnamax(10,15,20));

// if along with args have to take another parameter like string then we do like this 
function twopara(mssg, ...argss){
   console.log("message is along with array: " , mssg);
   return Math.max(...argss);
}
console.log(twopara("ankit",10,20,60));

console.log("----------------- Destructuring -----------------");
// array 
let arr162=["ankit","anita","anibha","saman"];
// storing array value in diff- diff variables Manually
// let variable1=arr162[0];
// let variable2=arr162[1];
// let variable3= arr162[2];
// console.log(variable1);

// storing value to diff- diff variable by rest methos 
let [variable1,variable2, ...others]=arr162;
console.log(variable1);  //--> this will print ankit as index 0 of array
console.log(others);     // --> esme jo name ni assign hua usme --> oo assign ho jayega


console.log("----------------- Destructuring Objects -----------------");
// object 
const obj177={
     name: "Ankit",
     class:10,
     age:12,
     subject :["hndi","english","mala"],
     userName:"ankit12",
     password: 123,
     city:"Not default city ",
};
   // let findd=obj177.userName;    --> this will not work when data is large conatis more features
   // console.log(findd);

   const {userName,password}=obj177;  // best way tp find data
   console.log(userName);

   // find data and assign to new variable
     // adding data to object --> default data
   const{userName: searchName,password: passdekho,city: newVarCity="default city"}=obj177;
   console.log("search by another variable : ",searchName);
      console.log("search by another variable : ",newVarCity);  //varCity --> esme data search ho kr store ho rha ese varCity data milega 
