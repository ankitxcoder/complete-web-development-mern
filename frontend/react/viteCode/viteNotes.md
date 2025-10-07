# Vite 
- npm create vite@latest --> to create react app 

## Vite folder flow
- Index.html --> main page 
- app.jsx --> sare component ( like button etc etc ) essi me likha hota hai  --> render hoga ( root ) se
- app.css
- main.jsx --> root lega app.jsx se aur render krega ( index.html me )
- index.html me div me root hoga --> jo render ho rha hoga main.jsx se --> app.jsx me sb likha jata hai

# Our 1st Components
- Component is reusable and independent Piece of Code
- App Component ke andar he generally sare likhe jate hai
- Componnet name ( Capital letter start)

- Creating own components
- now Render title in App

- Create new Component in another file 
- Export it as default ( now )
- Import it in App

# Import / Export 
- Named export are useful when you want to export multiple value s and import then with their specific names, while --> default export are handy for exporting a single value amd giving a custom name when importing . the choice between the two depends on the strudture and rquirements of your codebase.

- import Title from "./Title.jsx";

- Default Export 
- export default Title;

- named Export 
- export { Title , sum , another function};
- import { Title } from "./Title.jsx";

# Writting Rule in JSX
- Return a Single root element
- Close all the tags 
- camelCase Most Of the things --> variable

- HTML wale code me --> < div --> yha id ( use kr skte hai ) ,, classnhi use kr skte --> className ( alternate name use kr skte hai )
- bcz -> class is Keyword in Js --> so can't use class attribute in html 

# React Fragments 
- Fragments Let you group a list of children without adding extra Nodes tp the DOM
- Mtlb --> <div> ye dom me node create krta hai pr --> <> ye ni Node Create krta
- Multiple chejo ko combine krta hai into asingle elements
- 
- jb hm <div > use krt hai th extra div bnta hai DOm me th Empty tag use krengye th  extra Dom create ni hoga

### using { }  inside jsx file --> here we can write pure js code 

# Structuring Components
- product 1 --> componnet ,,, product 2 --> component
- Eg:- Product 1 , Product 2 , product 3  ]--> Ye sare 1 component me aayengye --> ( Product Tab )
-      th hm product tab --> coponent bnayengye and then --> ussi componenet ko return kr dengye ,, n ki product 1 , product 2 etc retyn krengye main file me 

# Style Components 
- How to do/ add style in React 
- file.jsx --> componnet --> className= "component class"
- file.css --> file bna kr --> .component class --> fir style dengye
- import that .css file in .jsx 
  ### Imp
- keep file(componnet) name same as classname and same .css name
- mtlb component me class name aur usse component class name ko css wale me style dengye

# React Props 
- Props are the information that you pass to a JSX tag 
- ek product component hoga jisme kya format oo rhta --> value paas hoga dushre ProductTab se --> Product Tab jha se value pass krna usme div me Product componnet likh kr value bhe like dengye --> fir Product component me jo avlue deye use object ke trh argumt jaisa accept krengye ---> aur div me object daal dengye --> esko bolte Props Concept ( mst hai ye )

# Passing Arrays To Props
- array ki trh 
- object ki trh 
- object key ki trh bej skte data similar to props

### imp
- object lete tym object?.a   ? --> btayega ydi dushre ke liye ni hai object th skip kr do aur current jgh print kro 

# Rendering Array 
- complete html element (<li>gd</li>) bejna hai jiske --> andar ek string hai gd

# Conditionals 
- Adding elements on the basis of some conditions 
- { price >= 10000 ? <p>Discount : 5%</p>: null }   ---. null ke jgh hm empty string bhe de skte hai ""
- { price >= 10000 && <p> Discoun : 5%</p>}
- hm return se if - else lga bhe kr skte ( pr code jayada repeate hoga)
- hmreturn se phly varibale me store kra kr fir <p> </p> me pass kr skte hai --> pr dikkt ye ki --> jispr discount ni uske liye bhe <p> extra dom create ho rha
