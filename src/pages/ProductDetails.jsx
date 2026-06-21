import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import API from "../services/api";


function ProductDetails(){


const {id}=useParams();

const [product,setProduct]=useState(null);



useEffect(()=>{


const getProduct=async()=>{

try{

const res=await API.get(`/products/${id}`);

setProduct(res.data);

}
catch(err){

console.log(err);

}

};


getProduct();


},[id]);



if(!product){

return <h2>Loading...</h2>;

}



return (

<div>


<h1>{product.name}</h1>


<img
src={product.image}
alt={product.name}
width="300"
/>


<h2>
₹ {product.price}
</h2>


<p>
{product.description}
</p>


<button>
Buy Now
</button>


</div>

)


}


export default ProductDetails;