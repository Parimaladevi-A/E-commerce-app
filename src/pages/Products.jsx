import { useEffect,useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import API from "../services/api";


function Products(){


const navigate = useNavigate();

const location = useLocation();


const [products,setProducts]=useState([]);



const query = new URLSearchParams(
location.search
);


const search =
query.get("search") || "";




const getProducts = async()=>{

try{


const res = await API.get("/products");


setProducts(res.data);


}

catch(error){

console.log(error);

}

};



useEffect(()=>{

getProducts();

},[]);





const addToCart=(product)=>{


let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];



cart.push(product);



localStorage.setItem(
"cart",
JSON.stringify(cart)
);



alert("Product added to cart");


navigate("/cart");


};




const filteredProducts = products.filter(
(product)=>

product.name
?.toLowerCase()
.includes(search.toLowerCase())

);




return (

<div className="products-container">


<h1>Products</h1>



<div className="products">


{

filteredProducts.map((product)=>(


<div

className="product-card"

key={product._id}

>


<img

src={product.image}

alt={product.name}

/>



<h2>

{product.name}

</h2>




<p className="description">

{product.description}

</p>



<p>

₹ {product.price}

</p>




<button

className="buy"

onClick={()=>addToCart(product)}

>

Add To Cart

</button>



</div>


))


}



</div>



</div>

)

}



export default Products;