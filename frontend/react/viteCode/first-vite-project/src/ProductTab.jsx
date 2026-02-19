import Product from "./Product";
function ProductTab(){
  // passing array as a object to propds
    let option = ["hi tech", "durable" , "fast"];
  // passing as a key only one object items visble
    let option2 ={a: "hi tect ", b:"durable"};
    // directly feature ko <product > me paas kr rhy 2nd wale me --> array ki trh {[]} bhe kr skte pr mai yha Object {{}}ki teh kr rha
  //html element ke andar string ko render kra rhy 
    //let option4 = [<li>"hi tech"</li>, <li>"durable"</li>, <li>"fast"</li>]
  // second way to do upper one 
    let option4 = ["hi tech","durable","fast"];

    return (
      <div>
      < Product title="Laptop" price={3000} feature={option} feature2={option2} />    {/*passing as object  */}
       < Product title="Book" price={10} feature3={{a:"hi tech",b:"durable"}} feature4={option4}/>
       < Product title="Pc "  price={10000}/>
      </div>
      

    );
}
export default ProductTab;
