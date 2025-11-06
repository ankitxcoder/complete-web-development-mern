let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click", function()
{
    // to set inside li
    // let item=document.querySelector("li");
    let item=document.createElement("li");
    item.innerText= input.value;

    // to add delete button automatically 
    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
     console.log(input.value);
    // to reset input 
    input.value="";


    // to perform delete --> this will not work on newly added task 
    // this will only work for previous existed task
    let delbtnss=document.querySelectorAll(".delete");
    for(delbtn of delbtnss){
        delbtn.addEventListener("click", function(){
            let par= this.parentElement;
            console.log(par);
            par.remove();
            console.log("deleted item");
        })
    }
    
});
