let arr =[];

let req= prompt("Please enter your Request ");

// ab loop chlayengye
// kyuki user wk kaam ko multiple time kr skta hai

while(true)
{
    if(req=="quit")
    {
       console.log("Quiting app");
       break;
    }

    if(req=="list")
    {
        console.log("======================");
        for(task of arr)
        {
            console.log(task);
        }
        console.log("---------");
    } else if(req == "add")
     {
        let task = prompt("enter the task you want to add");
        arr.push(task);
        console.log(task);
     }
     else if(req=="delete")
     {
        
     }
    
   req= prompt("Please enter your Request ");

}