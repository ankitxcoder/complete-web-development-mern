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


// event delegation 
  // sapplying event listner on parrent 
  ul.addEventListener("click", function(event){
    if(event.target.nodeName =="BUTTON"){
        // to delet the button --> calling parrent one and then delete parrent 
        let listItemss = event.target.parentElement;
        listItemss.remove();
        console.log("deleted");
    }
  })
    // to perform delete --> this will not work on newly added task 
    // this will only work for previous existed task
    // let delbtnss=document.querySelectorAll(".delete");
    // for(delbtn of delbtnss){
    //     delbtn.addEventListener("click", function(){
    //         let par= this.parentElement;
    //         console.log(par);
    //         par.remove();
    //         console.log("deleted item");
    //     })
    // }
    
});


// ------------------------------------------------- Part_11 CODE -------------------
// changing Color of h1 ---> Callback HEll
let h1= document.querySelector("h1");
function changeColor(color,delay,nextColorChange){
  setTimeout( ()=> {
    h1.style.color=color;
    if(nextColorChange) nextColorChange();   //--> If nextColorChange is defined (not null or undefined), then call it
  },delay);
}

changeColor("red",2000, ()=>{
             changeColor("green",2000,()=>{
              changeColor("orange",2000,()=>{
                changeColor("blue",2000)
              });
             });
            });




  function saveToDb(data){
    return new Promise( (resolve,reject)=>{
        let internetSpeeed= Math.floor(Math.random()*10)+1;
        if( internetSpeeed>4 ){
            resolve("success: data saved ");
        }else {
            reject("failure : weak conection");
        }
    });
}

// saveToDb("ankit")
// .

// ---------------------------------------then() & catch()-------------
// saveToDb("Hello man")
//     .then( ()=> {
//         console.log("promises was resolved");
//     })
//     .catch( ()=> {
//         console.log("promises was rejected");
//     });


// ----------------------------------- Promises chaining --------------
saveToDb("data")
       .then( ()=> {
          console.log("data 1 saved ");
          return saveToDb("Hello world");
       })
       .then( ()=>{
          console.log("data 2 saved");
          return saveToDb("3rd data");
       })
       .then( ()=> {
          console.log("dtaa 3 saved");
       })
       .catch( ()=> {
          console.log("promises was rejected");
       });


      
  //------------------------------------- async Keyword ------------------
  async function greet()
         {
            throw "there is an error";
            return "greet hellow";
            
         }

  greet()
    .then( (result)=> {
      console.log("greet promise was resolved");
      console.log("greet result is : ", result);
    })
    .catch( (err)=>{
      console.log("greet promises was rejected with err: ", err);  // err is there is an error 
    });


//-----------------------------------------------await keyword ---------------------------
     function getNum() {
          return new Promise((resolve,reject)=>{
            setTimeout( ()=> {
              let num=Math.floor(Math.random()*10)+1;
              console.log(num);
              resolve();
            },1000);
          });
         }

         async function demo(){
           await getNum();  // ---> await inside the async fucntion
           await getNum();   //  --> jbtk ye function execute ( resolve() ) ni hoga tbtk next function execution start ni hoga
           await getNum();
           await getNum();
         }