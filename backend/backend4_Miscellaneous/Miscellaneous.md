# Get and Post Request
- get --> use to get some response 
      --> data send in Query String --> query string me data dekhega 
      --> data send limited ( string )

- post --> used to post something ( for crate / write /update )  
       --> data send via Request body ( any type of data )  --> no limitations

# Handelling Post request 
 --> To get some response ( url )--> we need to set up POST request 
 --> to get json data response we --> need to Pasre post data request 

 app.use( express.urlencoded({ extended: true})); --> middleware
 app.use(express.json());

# Revisiting Js OOPS
- to structure our cide
- prototype
- new operator 
- constructor 
- classes 
- keywords( extends , super)
# ------------------------------------------------------------------------------------------------
# JavaScript Prototype & __proto__

## What is Prototype?
- Every JS object has a built-in `prototype` property
- It is a **shared blueprint object** that holds common methods (push, pop, toString etc.)
- Methods defined once in prototype, shared by ALL instances → saves memory

## Why Prototype?
- Without prototype → every object carries its OWN copy of every method → memory waste
- With prototype → 1000 arrays, but `push()` exists only ONCE in memory

## prototype vs __proto__

| | What it is | Lives on |
|---|---|---|
| `.prototype` | Actual blueprint object (stores methods) | Constructor functions (Array, String, Object) |
| `__proto__` | Reference/pointer (connecting wire) | Every instance (arr, str, obj) |

## Prototype Chain
```
arr → Array.prototype → Object.prototype → null
```
- JS searches up the chain until method is found or hits `null`

## __proto__ — Why needed?
- `prototype` holds the methods
- `__proto__` is the **link** that connects instance → prototype
- Without `__proto__` → instance has no way to reach the blueprint
- Break the link → methods become unreachable (even if prototype exists)

## Manually Adding to Prototype
```js
Array.prototype.mySum = function() {
    return this.reduce((acc, val) => acc + val, 0);
};
// Now ALL arrays can use .mySum() → defined once, shared everywhere
```

## One Line Summaries
- **Prototype** → common canteen, everyone eats from same place
- **__proto__** → the road connecting instance to that canteen
- **Prototype Chain** → JS keeps searching upward until null

# ------------------------------------------------------------------------------------------------
# Factory Function
- this try to solve the problem of creating of 1000 object for each student by craating one object 
- this is the function that create the object 
- Function ke andar object --> objcet me method create --> ydi 1000 student hai th oo object ke andar ka method sare student 1000 ke aliye alg memory me bnega  --> this is the problem here ( so we need other things )
eg p1.talk() === p2.talk() --> false output becasue value same but refrence is not same

# Constructor ( to overcoem the factory funuction issue )
- function name capital --> Not return anything 
different from factory function --> fn bna pr constructor me 2 object ke liye alg alg memory ni bnega
- constructor have prototype property
- its a blueprint

# new Operator/ keyword
- new Keyword --> object instance
 - when function call with new keyword --> function will use as constructor 
### new Keyword written
- 4 things happens
- new blank space in memory created4
- constructor have prototype property --> then new instance craeted have to it 
- jitne instance( object ) new keyword bnte hai --> utne refer krega same constructor ko (( no new memory build))
- p1.talk()===p2.talk()   ==> true  ( previous it was false)
- better then constructor blueprint used in new --> now use class for same task

# classes
- template for object
- inside class we write funuction , constructor ( that benifits)
- classes in real work as a function which called with new opertaor 

p1.talk() === p2.talk() -----> true

# inheritence
- code me jo repeate kr rha ---> ek nya class me  function me constructor ke andar likh dengye  --> tehn we inherit in diiff diff claseess
--> bby ising extends() or super() 
- extends() --> classes inherit hoti hai 
- super() --> parrent class inherit hota hao 
