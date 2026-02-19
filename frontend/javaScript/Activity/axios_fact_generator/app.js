// Query slect button
// add event listerner at btn
// call to function to get facts--> await
// query select P
// set p innner text

// function to get fact using axios

let btn = document.querySelector("button");
btn.addEventListener("click",async () =>
 {
    let fact = await getFact();
    let p= document.querySelector("#result");
    p.innerText=fact;
 });

 // making function to get api fact
let url = "https://catfact.ninja/fact";
async function getFact()
{
    try{
        let res= await axios.get(url);
        // wait to get url data -> then reurn
        return res.data.fact;
    }catch (err){
        console.log("Error is : ", err);
        return "no fact found";
    }
}