# Array Method

# forEach

- arr.forEach(Some function defination or name );

- ye sara element pr ek ek krke iterate krega aur call back me jo rhega usse return krega

# Map And Filter

- let newArray = arr.map( Some Function and defination and name);

- ye ek nya array bna kr dega sane size
- ye bhe iterate krega sara ekent pr nya array bna ke dega

- ydi kuch return n hoga th undefined print hoga

## Filter

- let newArr = arr.filter(Some function or defination or name );
- ye ek bnew array bnata hai pr condition( jo callback me likha hota ( return me )) ydi true ho tbhi

# Every / Some Method

- Return True if Every element of array gives true for some function, Else Return False
- Syntax
  arr.every(function or function name )

## Some

- same like every
- Syntax
  arr.some(function or function name )

# Reduce Method

- reduce an array to single value
- Syntax
  arr.reduce(reducer function with 2 variab;e for (accumulator, element));
  accumulator is --> here return value will store
  element --> iterate throw each elemnt of array

(variable) --> accumulator ke andr by default --> zero ya null value hoga

- reduces a array to single value --> in single value it return 1 value ( either boolean or any value)
- reduce will return one value --> eg : sum of element of array

# Maximun in array

- i will use .reduce method and use two --> 1> accumulator and 2> element
- then compare which one is greatest and return that
- (accu,element)--> (0,1)--> ans is 1
-                   ( 1,2)--> ans is 2
-                    (2,3)---> ams is 3
-                 return element ( as here it is graetest )
-           other wise return --> accumulator --> beacuse if elemt is lower then accumulator will be graetest

# Default Parameter
- in function --> giving default value in the argument (rule)
- rule 1-> ( a, b )  -> (NAN error when pass only default value to a but not to b ) always pass default value of b 
-IMPT --> while asign value dont skip last one ( in this dont skip b )

# Spread 
- Expand an iterable into multiple value 
- agar koi array ya string th uske ek ek element ko alg se likha ja skta hai 

# Spread ( Array Literals )
- we can do spread function in array 
- console.log(...arr1, ...arr2);  ---> here order is important 

# Spread Object Literals
- Object Literals ko dushre object me copy kr skte hai ( with spread ) aur usme new data add kr skte hai 
- array ko object me bdal skte hai --> key : --> hoga index AUr Value : --> hoga value
- literals ko Object me bdal skte hai --> key : --> index aur Value --> hoga value 

# Rest 
- allow a function to take an indefinite number of argument and bundele them in an array 
- opposite of spread 

- syntax : --> 
-              function sum(...args){
    return args.reduce((add,el)=>{add+el});
}
- if along with args have to take another parameter like string then we do like this --> in code


# Destructuring 
- Storing value of array into multiple variables 
- array ke values ko diff - diff multiple variable me store kr skte hai
- syntax : -
-           let [var,var2,  ...others]= arrayName;

# Destructuring OBJECTS
- object ke data ko access kis trh se kre ye sb hai 
- ek object fir --> syntax 
- syntax : const { searchname: newvariableMeStore , searchName: newvariableMeStore } = ObjectName
- fir variable ko print kra skte hai 
