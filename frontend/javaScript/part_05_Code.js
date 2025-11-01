console.log("Object Literal learning : ");
let Student = {
    Name: "Ankit",
    // Roll no: 24,  ---> It will give Error ( No SPace allowed)

    age:20,
    marks: 99.5
};
console.log(Student);

// Object constant bnn gye by const
// const se object(StudentDushra) ---> refrence adress in memory constant ho  gya unchangable --> but Attributr chanable hai sara like  name age etc
// ess liye Object Literal ko hm hmesa const bnayengye bda project me taki adress n edhr udhr ho 

const StudentDushra = {
    Name: "Ankit",
    // Roll no: 24,  ---> It will give Error ( No SPace allowed)

    age:20,
    marks: 99.5
};
console.log(StudentDushra);

// Thread / twitter Post
console.log("Thread Post");
const post={
    userName: "Ankit Kushwaha ",
    content: "this is my account",
    likes: 150,
    reports: 2,
    tag: ['tag',"my college",14, "ankit"]
};
console.log(post);

// Get Value
console.log("------------------------------get Value --------------------------------")
console.log("Getting value : "+post['userName']);
console.log(post.tag);

// Limeation of get value 
//making variable
let vari = "Ankit";
post[vari];
console.log(post[vari]);
console.log(post.vari);     //----------------> Dobut here 

// JS converts KEy to string 

const obj= {
    1:"a",
    2:"df",
    null:"e",
    true:"ank",   
    undefined:1
}
 console.log(obj[1]);   //----> result ia a ( It Means js converted 1 as string not 1 as index ) 
// here null , true , undefined --> are key -- but js --> convert it to (String) along with 1,2

// Add Update Value
const studentAddUpdate = {
    name:"Ankit",
    age: 24,
    marks: 94.5,
    city:"noida"
};
console.log(studentAddUpdate.name="Ankita Kumari");
console.log(studentAddUpdate["age"]="An");
console.log("After changing value of age name:", + studentAddUpdate);
console.log(studentAddUpdate);

// delete name from object Literal
console.log(delete studentAddUpdate.name );
console.log(studentAddUpdate);

// Object of Object 
const classinfo = {
    ankit : {
        name:"Ankit kushwaha",
        age:20
    },
    aman: {
        name : "Aman kumar",
        age: 20
    }
};
console.log(classinfo);
console.log(classinfo.ankit);
console.log(classinfo.ankit.name);
// changing nestead object value 
console.log(classinfo.ankit.name="ankit name changed here ");

// Array Of Object
const classinfoSecond=[
    {
        name: "Ankit in Array of object",
        age : 20
    },
    {
        name: "another name of object",
        age : 21
    },
    {
        name: "3rd Name Of Object",
        age : 22
    }
]
console.log(classinfoSecond);

// accessing elemnt by index wise 
console.log(classinfoSecond[1].name);
console.log(classinfoSecond[0].name);
console.log(classinfoSecond[1].gender="sixt index data");
console.log(classinfoSecond);

//math method 
console.log(Math.abs(-12));
console.log(Math.pow(2,2));
console.log(Math.floor(-5.9));
console.log(Math.ceil(-5.9));
console.log(Math.random());