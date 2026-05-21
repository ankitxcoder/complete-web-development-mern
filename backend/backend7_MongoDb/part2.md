# Mongoose
- this is library npm / package
- study how mongodb connect to JS
- It is ODM (object data Modeling ) library 

# installation
- npm i mongoose

# To use 
- require mongoose
- .connect to DB --> jS to DB at url link of db
 - mongoose.connect("mongoose" : //127.o.o./:27017/test");  --> 27017 is mongodb all time port 

## .connect is asynchroous so it means it has it own time not depends on compiler code runtime ( wait time it have it own)
- It wait for prmises from js so, use wait 

> main()
        .then(()=>{cosole.log("cponnects succeed)})
        .catch((err)=>cnsole.log(err))

async function main()
{awai mongoose.connect("link of db")};

# Schema
- overall structure
- means table also have its constraints
- schema defines the shape of the document within that collections

## Defining Schema
- Permitted schema type ( starting in Capital letter)
> String
> Number
> Date
> Buffer 
> Boolean
> Mixed 
> ObjectID
> Array 
> Decimal128
> Map
> Uuid

# how to WRITE code
- const userSchema = new mongoose.Schema( --> SChema is a class of Mongoose
> in class of monoose we define Schema
    {
        name : String ,
        Roll no : Number,
        age : Number
    }
);

//////////////////////////////////////////////////////////////////////////
# Models
- class of mongoose
- mongoose ki help se document create krne ke liye use krte hai model;
> eg
> const User < important User in Cpital > = mongoose.model("User", userSchema);
### User is Model ( class in JS)   && Sceond User is Collection name && Should be same 
- model name shpuld be sa,me as JS class name 

- Code
> const User = mongoose.model("User", userSchema);  --> User Not Users
- User Should be same 
- collection create ho skta hai db ka 

# Mongoes what do with name 
- Model name chage to singular to plural
> User --> users
 ( in js)   ( in mongoDb)
 > Product --> products

> In JS While Creating Collections
- User --> Always Singular ( in capital First Letter )
> In Mongo Db
- users --> by default plural --> small letter

Eg- const Employees = mongoose.model("Employees", userSchema);
////////////////////////////////////////////////////////////////////////////
# Insert in Mongoose
- model name is object , so using object we can can save one database
- Eg: 
       const user1 = new user({
        name: "ankit",
        email: "gfg@gmail.com",
        age:60
       }) ;

###    user1.save()  --> return a promise and so Return Promise so we can use then( ) method to print error or see it successfully runned or not 

user1
.save()
.then((res)=>{
    console..log(res);
})
.catch((err)=> {
    console.log(err);
});
//////////////////////////////////////////////////////////////////////////
# Insert Multiple 

user.insertMany(
    [
        {name: "ankit",email: "ggd@gmail.com",age:20},  // document / instances
         {name: "ankit2",email: "ggd2@gmail.com",age:202},
    ]
).then((data)=>{
    console.log(data);
});

### Note 
Mongoose uses Operation Buffering

Mongoose lets you start using youe models immediately , without waiting for mangoose to estabilish a connection to mongodb

mtlb hm mongoose ke sath connection bnte tym he hm data insert ni krte balki hm alg code likhte hai jo manggose allow krta hai taki baad me jo data likha insert ke liye oo add ho ske 

//////////////////////////////////////////////////////////////////////////
# Find in Mongoose
### Model.find()  //return a query Object( thennable)  --> its not return Promises but it return query object ( so thennable can be used)
## MMongoose Queries are not Promises. But they have a .then()

User.find().then((data)=>{
    consol.lo(data);
});

User.find({age:{$gte:47}}).then((data)=>
{
    console.log(data);
})
## find
## findOne()  // return a single result
- Model.findOne({ age: {$gte:47}}).then((data)=>{
    console.log(data);
})

- also can used to find one id data id passes as a string
## findById()
- Model.findById() //commonly used
User.findById("IDhere").then(resu).catch(err)

//////////////////////////////////////////////////////////////////////
# Update
Model.updateOne()  //passing condition who match first will update
Model.updateMany()  // paasing condition who match all of them will update

### code
User.upateOne( {name: "Bruce"},{age:49} ).then((res)=>{
    console.log(res);
});

User.updateMany({age: {$gt:45}}, {age:45}).then((res)=>{
    console.log(res);
});

///////////////////////////////////////////////////////////////////////
# Update by finding and then update
- Model.findOneAndUpdate()
- phly find aur print in console fir usse update
eg User.findOneUpdate( {name: "ankit"},{age:10})  //ankit age will update to 10

- User.findOneUpdate( {name: "ankit"},{age:10}, {new:true}) new is option here so // this will print updated db in console --> by default the new is false

- findByIdAndUpdate() same as  above

///////////////////////////////////////////////////////////////////////
# Delete In Mongoose
- 