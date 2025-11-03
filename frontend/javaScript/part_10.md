# DOM Events
- Web Page -- any thing TRIGGER( by click ) -- event created
- Html -->me-->Inline js Likh skte hai
- Event Print :- Inside Html --> <button onclick= " console.log("photo was liked"); " > Like please </button>


# Mouse / Pointer Events
- onclick(when an elemeent is clicked )  [ only single message can be prnt in console ]
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
- addEventListener
- multiple mssg can be print in cnsole
- single object(element ) ke liye multiple event listener bna skte hai
- Syntax:- 
- element.addEventListener("event",callback)

-  EG:- 
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
