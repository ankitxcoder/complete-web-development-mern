import './Product.css';
// function Product(props){  // prop ek object hai --> th hm title+ price use kr skte  hai
   function Product({title,price= 1, feature , feature2, feature3 , feature4}){  //1 is default value 
    
   const list = feature4?.map((feature4) => <li>{feature4}</li>);
    console.log(title);   //-> object ki trh ja rha hai (react Strict mode me )  2 baar console me print hoga 
    
    return (
        <div className="Product">
            {/* <h3>{props.title}</h3> */}
             <h3>{title}</h3>
            <h3>Price : {price/2}</h3>
              <p>{feature}</p>   
           <p>{feature2?.a}</p>
           <p>{feature2?.b}</p>
           <p>{feature3?.a}</p>
           {/* <p>{list}</p> */}
           <p>{feature4?.map((feature4) => <li>{feature4}</li>)}</p>
          
        </div>
    );
}    

export default Product;