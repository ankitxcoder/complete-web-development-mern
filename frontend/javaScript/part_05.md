# Object Literals  ( Code Done )
- esme hm ek OBJECT bnate hai --> aur uss object ka kuch PROPERTIES hota hai jo KEY VALUE ke form me hota hai 
- th Literals used to store KEYED COLLECTIONS And Complex Entities 
- Objects are the collection of Properties 
- PROPERTIES --> ( KEY- VALUE ) pair 

# Syntax 
- to create Object Literals
- let/const student= {
    name: "Ankit",
    roll no: 24,
};

- Object constant bnn gye by const
- const se object(StudentDushra) ---> refrence adress in memory constant ho  gya unchangable --> -  but Attributr chanable hai sara like  name age etc
- ess liye Object Literal ko hm hmesa const bnayengye bda project me taki adress n edhr udhr ho

# Thread/ Twitter Post ( Code Done )
- Create an object literal for the properties of thread / Twitter Post which includes
- properties 
- content 
- likes
- reports
- tags

# Get Values
- Object create krne ke baad hm value ko access kaise kre
- ya th Object ka naam 
- ya th object[ "key" ] or object[ 'key' ]
- ya using dot operator  ----> object.key --> no quote "" need

### Summary Limitation of get value  ----> Doubt here 
- Get value by two way 
- square ---> ydi ek variable bnaya th object[variable] dala th uska length aa jayega 
- dot --> upr wala ni hoga --> js ko smjh me ni ayega

# Get Values --> js Converts ?
- js automatically converts Object ( Keys ) --> to String 
- if we made (Number) as a (Key ) --> the number will converted to ( String )
- keywords in object ---> converted to ( String ) by js 

# Add / UPdate / Delete Value
- ObjectLiteral.Key = "Value";  --> this will update the Object literals
- ObjectLiteral[key] = "Value";  --> update the object literal

- delete objectLiteral.key ---> that key will be deleted
- delete ObjectLiteral[key]  ---> this will delete the Key value

# ( Nested Object ) Object Of Objects 
- here const object will be object( {} )
- eg: parrent object --> fir unka bacha ( objects )
-  const classInfo = {
    ankit: {
        name : "ANkit",
        age:24
    },
    ankita : {
        name : "ANkita ",
        age : 20
    }
}

# Array Of Object
- here const object will be Array
- const Object = [];
- const object = [ {},{},{} ];

# Math Object
- some constant unit are Pi and E ( Math.PI  and Math.E )
### Method in math object
- Math.abs(-12); ---> gives Absolute value --> i.e gives non +ve and non -ve number we get 
- Math.pow(2,4); --> 2 ki power 4
- Math.floor(2.5);  --> 2 answer --> km wale number ke trf round off mtlb 2 ke trf round hoga
- nearest integer ROund off hoga
- Math.ceil(n)  ---> larger interger value pr round off kr dega
### Math.random()  --> important
- Math.random()  --> 0 to 1 ( here 1 kbhi ni dega its excluded )  --> 0 se 1 ke bech

# Random Integer
- generate random numnber between fixed number