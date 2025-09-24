# For Loop 
- use for iteration
- for(initilisation; condition; Updation)
{
    // Do somethings 
}

- Eg:-  for(let i=0; i<5; i++)
        {
            console.log(i);
        }

## Even number print
-  i=i+2

# parseInt()
- table code 
- let n= prompt("Enter no. whose multiplication you want"); ---> gives no. type as String 
- n=parseInt(n); ----> this will convert prompt String no>>> into integer

- for(let i=n; i<n*10; i=i+n)
{ 
    console.log(i);
}

# Nestead for loop 
- for ()
- {
-    for()
-        {
-
-         }
- }

# for of 
- similar like python 
- use to get every element of array 
- Eg:- 
-     let fruits=["Aplle","banana",Orange"];
      for(fruit of fruits)
      {
        console.log(fruit);
      }

# Nestead for of
- eg:- 
-      let heros=[ ["SuperMan","batman"],  ["wonderwomen","maha"] ] 
-      for(list of heros)
       { 
        for(hero of list)
        {
            console.log(hero);
        }
       }