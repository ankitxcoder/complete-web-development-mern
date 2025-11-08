# DOM Events

- Web Page -- any thing TRIGGER( by click ) -- event created
- Html -->me-->Inline js Likh skte hai
- Event Print :- Inside Html --> <button onclick= " console.log("photo was liked"); " > Like please </button>

# Mouse / Pointer Events

- onclick(when an elemeent is clicked ) [ only single message can be prnt in console ]
- onmouseenter( when mmouse enter an element )
-
- mouse se web page pr kuch bhe ho th event generate hoga
- in html code --> create button --> then in js ( select that button and ) --> by using .onclcik=function( what want to print)
- EG:-
-     let btns= document.querySelectorAll("button");
      for(btn of btns)
      {
        1 // On Click
        btn.onclick = sayhello;   --> dont use () bracket in name of function --> it execute function only when btn clcik.

        2 // On Hover element
        btn.onmouseenter = function(){
            console.log("You entered a button");
        };
      }

      function sayHello(){
        alert("hello");
      }

# Event Listener

- event listener can be add to any things on page .
- .addEventListener("event",callback);
- multiple mssg can be print in cnsole
- single object(element ) ke liye multiple event listener bna skte hai
- Syntax:-
- element.addEventListener("event",callback)

- EG:-
-     let btns= document.querySelectorAll("button");
      for(btn of btns)
      {

       btn.addEventListener("click", sayHello);
       btn.addEventListener("dbclick",function()
       {
        console.log("say double clicked me");
       });
      }

      function sayHello(){
        alert("hello");
      }

# Event Listener For Elements

- listener can be add for any things on page
- To do Event Listener
- querySelect [ on which want to apply event listener ] --> var.addeventListener("click", call back function);

- Eg:- let box= document.querySelect("mouseenter", function(){
  conxole.log("print div enered");
  });

# this In Event Listeners

- element/object pr --> event listerner krte hai --> call back me this pass kr de th --> th event listerner same element/object ko denote krega ==> mtlb ydi this ko print krengye th - elment return me print ho jayega
- .addEventListener("click", callback); ===> callback --> this
- Eg:- Changing color of elements
- let btn= document.querySelect("button");
-     let p = document.querySlector("p");

  let h1= document.querySlector("h1");
  let h3= document.querySlector("h3");

  function changeColor(){
  console.dir(this);
  this.style.backgroundColor = "blue";
  }

  btn.addEventListner("clcik", changeColor);
  p.addEventListner("clcik", chnageColor);
  h1.addEventListner("click", chnageColor);

### Imp default

- .addEventListener("click", function( event ) ) {
  }; --> function parameter me event pass hota hai by default

# Keyboard Events

- Keyboard se ydi kuch bhe press krengye ---> event trigger hoga ---> jisse event Listener se print kra skte hai
- mdn for it --> addevent listener mdn --> parameters (event type ) --> keyboardevents( elemetns ) ( study from here )

#### Keydown

- when i press any key on keyboard --> its keyDown event

#### Keyup

- when pressed key relased --> its Keyup event

#### keybard events ==> events --> code ---> 'space' keyA, 'semicolon'

                            --> key ---> screen

#### Printing in console which keyboard is pressed

- let input= document.querySelector("input"); --> input milega yha se
- input.addEventListener("keydown", function(event) --> Keydown ( any key press it detect)
  {
  console.log("code", event.code); --> eevnt code --> which key pressed
  console.log("key", event.key); --> event key --> how it look on page
  cosole.log("key was pressed ");
  });

#### which key pressed based on this move charater , Game playing

- let input= document.querySelector("input");
- input.addEventListener("keydown", function(event)
  {
  console.log("code", event.code);
  if(event.code=="ArrowUp"){ -----> ArrwUp
  console.log("Character moves forward");
  } else if ( event.code=="ArrowDown"){
  console.log("Character moves dback");
  } else if (event=="keyL"){ ----------> Key L
  console.log("character move left");
  } else if(event=="keyR"){
  cosnole.log("character move Right");
  }
  });

# Form Events

- let form=document.querySelector("form");
- form.addEventListener("submit", function()
  { console.log("form is submitted");});

#### event.preventDefault(); ---> this will prevent deafult action happens on page like --> redirecting page

- form.addEventListener("submit", function(event)
  {
  event.preventDefault(); ---> after submitting form this will not redirect the page to any other website  
   alert("form submitted " );
  });

# Extracting Form Data

- Form submitted data ko access krna
- steps --> Select form --> eventListener --> perevent default md--> querySlector ( id of user , password by #pass etc) --> print user.value , password.value
- eg:
  let form= document.querySlector("form");
  form.addEventListener("submit", fuction(event)
  {
  event.preventDefault();
  let user=document.querySelector("#user");
  let password=docmunet.querySelector("#pass");

          console.log(user.value);
          console.log(pass.value);

          alert(`hi ${user.value} your password is ${pass.value});

         });

#### No query slector --> done by direct form.elements

         // also can be done throw another way
          let user=document.querySelector("#user");
          let password=docmunet.querySelector("#pass");  --> this can be done in

          --> let user=this.elements[0];   --> form,elements[0]
          --> let pass=this.elememts[1];  --> postion 1 wala input elemts of form pr kaam hoga

          rest code same

# More Events

## Change event

- it track when the value of an element has been changed [ only works on --> <input>, <textarea> And <select> elements ]
- chote chote change ko trcak ni krta sirf --> initial and final chnges ko track krta hia
- mtlb initial imput khali tha th final me ydi kuch bhe likha gya th trigger ho jayega
- ek ek letter etc ydi hm likhte hai th track ni krta hai
- steps --> Select form --> eventListener --> perevent default md--> querySlector ( id of user , password by #pass etc) --> fir event Listener lgayengye change ka
- Eg;
  let user = docement.querySelector("#user");
  user.addEventListener("change", function(){ console.log(this.value);});

## input event

- it track when the value of an <input>, <select>, or <textarea> elemnts has been changed
- chota chota changes ko track krta hai
- a input me th track kr dega like this
-  Eg;
    let user = docement.querySelector("#user");
  user.addEventListener("input", function(){ console.log(this.value);}); --> this.value ke jgh user.value bhe ho skta hai


# Event Bubbling 
#### event.stopPropagation();
- bht sare event ho -->
- div pr event listner ho
- div ke andar li me event set ho
- ==> th jb andar li pr clcik krengye th automaiclly div ka bhe event trigger hoga -==> to stop it we use ( event.stopPropagation(); )



# Event Delegation
- Problem :-
- old element --> pr event listener hai === pr
- jb new element bnega th old wala event listner new element pr ni lgegea
- this problem solve by event delegation 
- Solution :-
- apply eevent listner at parrent of elemnt 
- to know in parrent which one triggered or clicked
- then use   event.target.nodeName  --> this will tell it either rbutton or list ( see cpde in miniproject  TOdo App )
