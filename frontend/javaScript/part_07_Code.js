console.log("-------------------this KeyWord-------------------------");
// this Keyword --. object ke andar method --> cant access object key value pair without the help of this keywords

const student = {
    name: "ankit",
    age: 20,
    eng: 24,
    math: 45,
    chem: 40,

    getAvg() {
        console.log("printing this : ",this)
        let avg= (this.eng+this.math+this.chem)/3;
        console.log(`${this.name} avg mark is : ${avg}`);
    }
    
}  
student.getAvg();

console.log("-------------------Arrow function-------------------------");
const sum = ( a, b ) => { console.log("Arror Function is : "+(a+b));};
sum(2,3);
const Stringss = (a,b) => console.log(a+b) ;
Stringss(2,4);


console.log("-------------------setTimeout-------------------------");
// setTimeout( ()=>{console.log("Hii Its executing after timeout: ");}, 4000);
// console.log("executing after setTimeout");
// console.log("executing after setTimeout");
// console.log("executing after setTimeout");

console.log("-------------------setInterval-------------------------");
// setInterval( () => {console.log("this is setINterval");},2000);

// let id1= setInterval( () => {console.log("hellow world id 1");},3000);
// console.log(id1);

//  let id2= setInterval( () => {console.log("hellow world id 2");},3000);
// console.log(id2);

// to stop setInterval
// clearInterval(id1);
// clearInterval(id2);


console.log("-------------------thisWithArrowFunctios-------------------------");
const thiswithArrow={
    name:"ankit",
    age:20,
    prop: this, //global  scope
    marks: 100,

    // function
    getName :  function(){
        console.log("getName function hai ye : ", this);  // ye this apne calling object ke this ko dekhega --> aur fir uske this ko print krega
        return this.name;
    },

    // making another function
    // getMarks:  function(){
    //     console.log(this);
    //     return this.marks;
    // },
   
    // making arrow function
    getMarks: ()=>{console.log(this)    // ye hai bekar trika --> ese kuch beh acces ni hoga bcz ye apne parrent ke this( jo ki window hai) ko return krega n ki calling object ke this ko
        return this.getMarks;            // parrent scope --> window
    },

    getInfo1: function(){
        setTimeout(  ()=>{console.log(this);}  ,2000);  // arrow function ke liye this ( parrent ka this hoga )
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this);  // here this print jo this ko call kiya hai --> th setTimeout call lgata hai window object upr wale ko bhe window object call lahaya hai pr yha dekhega koin call lgaya uska this likha
            //aur arrow function me call koin lgaya usse mtlb ni uska parrent ka this kya usse mtklb hai
        },2000);

    }
};
console.log("this is getName",thiswithArrow.getName());
console.log(thiswithArrow.getMarks()); 
console.log("here getInfo1"); 
thiswithArrow.getInfo1();
thiswithArrow.getInfo2();
console.log("here getInfo2 print before 2 sec"); 
