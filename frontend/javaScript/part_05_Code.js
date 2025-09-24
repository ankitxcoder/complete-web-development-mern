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
console.log("Getting value : "+post['userName']);
console.log(post.tag);

// Limeation of get value 
//making variable
let vari = "Ankit";
post[vari];
console.log(post[vari]);
console.log(post.vari);     //----------------> Dobut here 

