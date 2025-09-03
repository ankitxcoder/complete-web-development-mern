# String Method 
- method are some action which have to perform some task on object
### Format
- stringName.method()
- eg:- console.log()

# trim method 
- Trim whitespace from (both the end) snd (return new one )
- str.trim();

### String are immutable--> they created new one ,, not change 

# ToUpperCase() and ToLowerCase()
- new string will be created bcz original string are Immutable

# String Method with Arguments
- Argumants is the Some value that we pass to the method 
- eg:- Finding A in Ankit 
-  so in method passing A is arguments

## String Method with Arguments indexOf() 
- Return the first index of occurence of some value in string . Or give ( -1 ) if not found
- Eg:- let str="Ankit";
-      str.indexof("it");  this will return the 3

# Method Chaining
- str.trim().toUpperCase(); 
- left to right  --> solve hoga

# Slice 
- Return a Part of the original string as a new string 
- let str="ILoveCoding";
- str.slice(5);  //Coding
- str.slice(1,4); // "lov" --> last wala ni ayega (4)
- str.slice(-ve num);  --> str.slice(length - num);

# Replace and Repeat method
- str.replace("love", "do");
- return new String 
-
-
- str.repeat(2); --> this will repeat the string two times

# Array ( Data Structure )
- Linear collection of Things
- bht sara Variable n banana pde ek variable bna kr array ke form me store kr leye jaye
- let arreg=["A","jdf"];

# Creating array
- let newArr=["Ankit",1]  --> mixed type is ok we can do
- newArr[0][1] --> 0 mtlb array ka 0 index ,,, --> 1 mtlb ( 0 index ka item ka 1 index ) --> (n)
- newArr[0].length --> Ankit 
-
- Empty array can also make --> eg:- let newArr= [];

### Array type is --> Object type

# Array are Mutable
- fruits[0]="banana" --> in fruits at 0 index will become (banana)
- fruits length is 5 but can add at any index --> and in between index there will add empty index 
- fruits[1000]="before it all are empty index add"

# Array Method
- ( .push( "" ) )--> add to end
- ( .pop() ) --> Delete from it and return it
- ( .unshift( "" )  )--> add to start
- ( .shift() ) --> Delete from start and return it

## indexOf()
- indexOf() --> this method is used return Index of Something 
- if found then --> index
- if not found ---> -1   return

## includes()
- search for a value
- found then --> return (true)
- Not found --> return ( false )

# Concatenation and reverse
- .concat()  ---> Merge Two array
-eg:- arr1.concat(array2);

- reverse() --> reverse an array
- arr.reverse();  --> return same array

# Slice in Array
- copy a portation of array
- array.slice();  ---> gives all array element
- array.slice(2);  ---> 2 ko imclude fir last tk ka sara element
- array.slice(2,6);   --> 2 include hai ----> 6 exclude hai 
- array.slice(-ve num index )  ---> last se index count hoga av
- Eg:- .slice(-1)    ---? return last element 
-
- Kuch aisa slice krna jo hai he ni th --> empty array return krega
- Eg:-   .slice(1000);
