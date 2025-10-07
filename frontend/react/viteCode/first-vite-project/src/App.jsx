import "./App.css";
import DescriptionComponent from "./DescriptionComponent"; 
import ProductTab from "./ProductTab";




//function is component
function App(){

  // ek he cheej return hoga 
  return  (
    <>
      <p>{"this is js in { } : "} {2*2}</p>
        
    <div>
    <h2> this is first div in App</h2>
    <Title/>
     <DescriptionComponent/>
     <Title/>
     <DescriptionComponent/>
    </div>

      <div>
       <ProductTab/>
      </div>
     
     </>
     
  );
  
 
}

// creating own components
  function Title(){

    return (
      <h6> Success Fully created my First Components in App.jsx</h6>
    );

    //now Render title in App
  }
export default App;
