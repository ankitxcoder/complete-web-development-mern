# 1 Node.js

- JavaScript run time Environment
- used for server side programming
- node is not a langauge not library not framework --> it is js run time env.

# 2 Node Instalation

- to check installed or not --> node -v
- to installed :--> nodejs.org

# 3 Node REPL

- to open repl in commond promot write --> node and enter press
- read ,,,, evaluate ,,,, print,,, loop
- there is no window object ---> but it have global window

# 4 Node Files

- to create --> touch filename
- to run ---> run filename

# 5 Process

#### process

- this object provide information about and control over , the current node.js process

#### process.argv

- return an array containing the commond-line arguments passed when the node.js process was launched
- EG:-
  let args= process.argv;
  for (let i=0;i<args.length;i++)
  {
  console.log("Hello to",args[i]);
  }

        now in nodeREPL
        node script.js  ankit passing_argumnt ankita jai   (ankit etc --> are arhumnt passed with file in node REPL)

        // Output
        - Hello to ankit
        - Hello to passing_argumnt
        - Hello to ankita
        - Hello to jai

# 6 Export in files --> only in same directory

#### module.exports

- module.exports = object --> this will return a Special object --> that we want to use in another file

#### require()

- a buil-in function to include external modules that exist in separate file
- to require package smply write the name of package not ./
- Eg:-
  const someValue = require(./functionFileName ); --> ./ its not package
  const figlet = require("figlet"); ---> no ./ it package

### to export rule

#### By making object of function

- by making function --> and then make object of function == let object ={ obbject of function} --> and then return the object in module.export = object;

#### OR by direct return object without making object variable

- by making function --> and instaed of making object -> write at object == module.exports ={ obbject of function}

#### direct --> module.exports.function

#### exports.function

# 7 Export in directory --> only in different directory

- directry_1 & directory_2 --> to export from directory 1 to 2
- in directory_1 --> make index.js file ( inside it reuire all files) --> from directory_2 ( reuire index.js file )

#### imp

- file will export then index.js will require then another directory will require it

- directory_1/
  ├── fileA.js <- export of fileA
  ├── fileB.js <- export of fileB
  └── index.js ← (Collect all exports here by require) --> export of fileA + export of fileB

- directory_2/
  └── main.js ← (reuire everything from directory_1) require index.js exports

# 8 NPM ( Node package Manager )

- npm is a standard package manager for Node.js
- 1 --> Library of Packages
- package are those code which are written by some one else and i can use that cod ein my code and can download that code folder with the help of npm ( beacuse its pacakge manager )
- 2 --> commond line tool to acces those package and manage them

# 9 Installing packages

- (npm install package name )Or (npm i package name)
- documentattion --> npm.js/package --> explore here
- Eg:- figlet --> commond line ke upr text print krane ke liye

#### node_modules

- the node_module folder contains every installed dependcency for your project --> it contains Dependency of our project
- when we intalled package it automatically installed

#### package-lock.json

- version of dependency and information about dependency stored in this file
- IT record the exact version of every installed dependency, including its sub-dependency and their version

#### code to run figlet

- install --> npm i figlet
- make index.js file and require it --> const figlet = require("figlet"); ---> no ./ it spackage
- paste the code that given in documentation to print name in terminals

#### package.json file

- important file

# 10 package.json

- the package.json --> stored the all information about which dependcy had used and which version and infomation about dpencency

#### package.json --> npm install ==> install all pacakge automatically

### how to create own package.json

- jo in project folder --> npm init --> ( name of package --> same as project name --> can be another also) --> entry point --> index.js ( by whoch file anyone can use project) enter enter then --> author name ( ankit ) --> json created.
- when we install any pacakge then --> its dependency also added in alraedy existed (pacakge.json) file

# 11 Local v/s Global installation of package

### Global installation

- npm install -g packageName --> this will install the package globally
- npm link packageName --> this will link the current directory with globally installed package

- sudo chown -R $USER /usr/local/lib/node_modules

- What this command does
- sudo → run as superuser
- chown → change ownership
- -R → recursively (affects all files and folders inside)
- $USER → your current user
- /usr/local/lib/node_modules → the folder where global node modules are installed
- after this global installation --> link the package to current project 


# Import Module
- Es6(js version) --> me arrow function aaya --> th ab package (import) hota hai  ES6 se phle hm require krte thy pr ab import krte hai
## phle aisa hota tha 
- directory_1/
  ├── fileA.js <- export of fileA
  ├── fileB.js <- export of fileB
  └── index.js ← (Collect all exports here by require) --> export of fileA + export of fileB
- module.export = objectName;

- directory_2/
  └── main.js ← (reuire everything from directory_1) require index.js exports
## Ab Mordern hota hai 
- directory_1/fileA.js
   export const fileAFunction = () => {   --> export function
       console.log("I am file A");
           };

- directory_1/fileB.js
   export const fileBFunction = () => {  --> export functon
        console.log("I am file B");
           };

- directory_1/index.js
  Collect all exports:
       export * from "./fileA.js";
       export * from "./fileB.js";

- directory_2/main.js
       import { fileAFunction, fileBFunction } from "../directory_1/index.js";  --> pura file ka name likhna pdta hai (index.js)  --> etna krne ke baad --> package.json me add --> "type":"module"  then ecerything will work

fileAFunction();
fileBFunction();
### Difference between Require and Import
- mordern import give slective to import 
- loading is synchronous for ' require ' but can be asynchrons for import 
- mtlb require jis sequenece me cheje likhi gye hai ussi sequence me load hongi
- pr import me 4 module hai pr last wala phly avaibale hai th last wala phly load ho jayega
