console.log("-------------------this KeyWord-------------------------");
// this Keyword --. object ke andar method --> cant access object key value pair without the help of this keywords

const student = {
    name: "ankit",
    age: 20,
    eng: 24,
    math: 45,
    chem: 40,

    getAvg() {
        console.log("printing this : "+this)
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
setTimeout( ()=>{console.log("Hii Its executing after timeout: ");}, 4000);
console.log("executing after setTimeout");
console.log("executing after setTimeout");
console.log("executing after setTimeout");