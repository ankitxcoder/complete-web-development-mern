# console.log()
- used to print message in console .
-- i.e js file code is printed in console
------------------------------------------------------------------------------------------
# Linking js file to Html file
- <script src="file name "> </script?>
- ;(semicon tell js that line ends here)
-------------------------------------------------------------------------------------------
# Template iterals
- (` `)    ---> they are backticks
- backticks are --> used as strings but here can write many strings in single backticks 

- ${ expression }   --> - they are used to add embedded expessions in a string 
- eg-> `  hi ${ var} `
-------------------------------------------------------------------------------------------
# Opeartor
-------------------------------------------------------------------------------------------
#Comprasion Operator         [ Important]
- == operator -> Compare Vlaue , Not type  
-  === operator -> commpare Type & Value
- Boolean type Answer
Eg:- 123="123"
      1=="1"  --> true  
-------------------------------------------------------------------------------------------
# Comparision for non numbers
-General trends
-- "a"=> 61 ,, "A"=>41   [ smaller have greter value]
-- a<b<c<d...... ,, A<B<C<D<.........
-- Boolean type Answer
Eg:-
    "*"<"&" --> answer is False
--------------------------------------------------------------------------------------------
# If-Else    Code -[if-else.js]
-Very easy concept 
- 2 if ke andar dushra code ho skta 
- if-else ke bech me dushra code ni ho skta hai 

-------------------------------------------------------------------------------------------
# Else-if statement 
- if(condition1)
- {

- }
- else if(condition 2)
- {
 
- }
- else if(condition 3)
- {
    
- }
- else if(condition 4)
- {
-
- }

# Best approach if-else-if-else
-if(condition 1)
{}

else if(condition 2)
{}
else if(condition 3)
{}
else if(codition 4)
{}

else{

}

# Nested if-else 
- if(condition 1)
{
   if(condition 2)
   {}
   else{}
}
else{}

# Logical Operator 
### And &&
- if ( condition 1 AND && condition 2)
- IF have to check the two condition in if ( condition 1 AND && condition 2)
- true if both true Otherwise False

### Or ||
-if ( condition 1 OR || condition 2)
- false only when Both are false 

### Not !
- true ka flase

## Multiple Operator 
- left to right solve

# Truthy and flasy ( Code Done )
- EveryThing in js is True OR False ( in Boolean Context )
- this doesn't mean there value is true or flase ,, but they are treated as true or false when hey are boolean context

### Falsy Value 
- flase, 0 ,-0 ,On(Bigint value ) , "" ( Empty String --> no space inside "") , null , undefined , NaN

### True value 
- Everything else 

- if ( condition)
- Inside Condition
- Flase Or True 

# Switch Statement ( Code Done )
- switch ( variable name jiska value compare /check krna hai )

# Alerts & Prompts ( Code done )
- Alerts display an alert message on page
- Pop up --> end with when press on ( OK )

- Prompts 
- Display a dialog box that ask user for some input
- Pop up jisme user data bhr skta hai
- Prompt ko kise bhe varible me store kr skte hai `