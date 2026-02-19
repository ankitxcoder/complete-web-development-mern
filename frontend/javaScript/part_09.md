# DOM ( Document Object Model )
- dom represent the a document with a logical tree
- it allow us to manupulate change webpage conetent (html elements)
- console.dir(document) ---> object which have properties

### How to select any --> html object like h1 etc --> in js

- console.dir(document.all[8]) --> document object se --> all object 8 index h1 ko selet
- console.dir(document.all[8].innerText);
- document.all[8].innerText=ankit"; ---> this will change the data

# Select Element

## Select Element By ID

### getElementById --> method of document object

- document.getElemnetBYID("id name") --> html elemnt ni milega
-                                     --> esse html ke andar jo object prepare hua hai dom se oo milega
-                                     --> IF ID not exist then NULL value milega
-                                     --> Id written in "" -> otherwise js understad it as Variable
- Syntax:-
  document.getElementById("Id name");
  then store it in any variable and then asign any value

## Select Element by Class

### getElementByClassName

- Return the element as an HTML collection{ not pure array } or ---> ,,,, empty collection ( if not found )
- syntax:
  let svaraibleName = document.getElementByClassName("classNAme");

# Select Element by Tag Name

- Return the element as an HTML collection{ not pure array } or ---> ,,,, empty collection ( if not found )
- Manipulation is also possible
  ----> document.getElementByTAgName("p")[1].innerText ="ABC";

# Query Selector

- Allow us to use any CSS selector

### Multiple way to select --> Single and First occurence selctor

- document.querySelector('p'); --> // selct first p element
- document.querySelector('#myID'); --> // slect first element with id = myID
- document.querySelector('.myClass'); --> // Select first elemnet woth class = myClass

### select all

- document.querySelectorAll("p"); --> //Select all p elements

# Setting Content in Objects

- Using Properties And Method

### innerText

- shows only text which are visble on web [page]

- Shows the visible text contained in a node

### textContent

- Shows all the Full text --> also disable off Text, are visible

### innerHTML

- Shows the full markup --> how we write code in html are visble

## Manipulation in content

- ...> Slect the elemt by query
- let hra = document.querySelector( 'h1);
- ...> Mainipulate
- hra.innerHTML= "<u>Ankit bhai </u>";

- another way
- hra.innerHTML= `<u>${hra.innerText}$ </u>`, ---> hra ka innerText h1 hai

# Manipulating attributes

- 2 concepts ( get attributes and set attributes )
- obj.getAttribute('a'); --> obj.getAttribute('attribute')
- obj.setAttribute("id", "spidermanImage"); ---> obj.setAttribute("attribute", "value")

- koi bhe attribute ( object ) ka attribute pa skte hai aaur uuse new set bhe kr skte hai
- eg: image object --> first use select query to select that image and then by the --> jis variable se select kiya usse he use krke [ obj.getAttribute('a'); ] kro --> attribute fetch ho jayega -->to set new attribute [ obj.setAttribute("id", "spidermanImage");]

# Manipulating Style with Style attribute

- Style Property ( inline css ) html me lines me likha hua style code he stye se access hoga n ki style file ka code
- obj.style

- how to see image etc style property
- let img = document.querySelector("img");
- console.dir(img); --> this will print object --> see style
- or i can also do --> img.style

- to set color --> img.style.backgroundColor: red;

- impo note --> css style code generally after one word there is hyphen but (in java Script )
- there is no hyphen here follow (cammel case) eg: backggroundColor

# classList Properties

- using class List
- Obj.classList
- To set value --> we use classList , not --> setAttribute("attr","value");

- classList.add() --> to add New classes
- classList.remove( ) --> to remove classess
- classList.contains() --> to chcek if class exists
- classList.toggle() --> to toggle between add and remove
-                     --> toggle will add class if class not exist( and return true ), toggle will remove class if class exist ( and return false )
- toggle is switch type --> if yes then we toggle then will become no vice versa

### Eg: code ->

- let heading = document.querySelector("h1");
- heading.classList.add("gren");
- headiong.classList.remove("clasName")
- heading.setAttribute("class") --> only one class feature will add ,, but with classList --> can add apply more features of class -->so that why we use classList more
- heading.classList.toggle("green"); --> this will add green class if class not exist and if class Exist then it will remove and return false

# Navigation

- parentElement
- children
- previousElementSibiling // nextElementSibling

### parentElement ( ek chld ka ek he parrent hoga )

- code to get parent
- let h4= document.querySelector(h4);
- h4.parentElement; --> gives parrent of h4 with class name

### Children ( multiple ho skta hai)

- h4.children --> print children of h4
- ul.children[1] -> this will return child of ul which is at index 1
- ul.children[1].previousElementSibiling; --> thia will print ul index 1 previous children
- ul.children[1].nextElementSibiling; --> same concept as prevous sibling

# Ab tk

- hmlg DOM me jo object element tha usko change krke ya uske sath kaam kr rhy thy pr ab hm new element (bnayengye) aur (insert) krengye web page me

# Adding Elements

- Steps --> create new elements --> insert elements in page
- how to do
-            --> documnent.createElement('p');     ===> this will craete new element p  ==> now insert it

### insert type

- .appendChild(element) --> element ke child me append krega
- .append( element ) --> element me append kr dega ( text aur string bhe ) hmesha last me add krta hai
- .prepend( element ) --> first / starting me ja kr add krega
- insertAdjacent( 'where', element ) --> where position ==> have to add which --> element

- Eg:-
-       let newP = document.createElement('p');    --> craete new null p element
        console.dir(nnewP);                        --> print null p element will craete
        newP.innerText("hi i am new ankit")        --> this will insert new data
        // now after creating new element --> insert it into page
        select where have to append data  by [ .appendChild(element ) ]
        let vboy = document.querySelector("body");
        vbody.appendChild(newP);                   --> this will append data at very end of page
        // if have to append data in box then --> select the box and then append Child it

        [.append( element )]
        newP.append("adding in element")   --> newP me ja ke string add hoga

        [.prepend(element )]
        box.prepend(newP)   -->> newP box ke staring me add hoga

        [.insertAdjacent( 'position',element )]
        eg:-
        //createing button

-            let btn=document.createElement('button');
             btn.innerText=" new button ";
        //selecting p
             let p = document.querySelect('p');
        // now insert element
             p.insertAdjacentElement('beforebegin',btn);   --> p begin se phly new line me btn bnega
             p.insertAdjacentElement('afterbegin', btn);    --> p ke starting me btn lg jayega
             p.insertAdjacentElement('beforeend', btn);     ---> p ke last me btn lg jayega
             p.insertAdjacentElement('afterend', btn);      --> p ke end ke baad new line me btn add hoga


# Removing Elements

- removeChild( element ); --> child ko remove krega --> th phly parrent ko select krna pdega fir .removeChild( child jisko remove krna uska naam likh dengye ) --> remove ho jayega

- remove( element ); ---> sirf jisko remove krna hai uska naam element me addal do
- eg:- body.removeChild(btn); --> body me jo btn usko khtm kr dega
-      body.remove();    --> pura body khtm
