import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";


function Home(){

const [products,setProducts] = useState([]);
const navigate = useNavigate();


const getProducts = async()=>{

try{

const res = await API.get("/products");
setProducts(res.data);

}
catch(err){
console.log(err);
}

};


useEffect(()=>{

getProducts();

},[]);



return (

<div>



{/* HERO BANNER */}

<div className="hero">

<div className="hero-text">

<h1>
Welcome to E-Shop
</h1>

<p>
Your one-stop destination for electronics, fashion & more
</p>


<button
onClick={()=>navigate("/products")}
>
Shop Now
</button>

</div>


<img
src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
alt="banner"
/>


</div>



{/* FEATURED PRODUCTS */}

<h2 style={{padding:"20px"}}>
🔥 Featured Products
</h2>



<div className="products">


{
products.slice(0,6).map((product)=>(


<div
className="product-card"
key={product._id}
onClick={()=>navigate(`/product/${product._id}`)}
>



<img
src={product.image}
/>


<h3>
{product.name}
</h3>


<p>
₹ {product.price}
</p>



</div>


))

}


</div>



</div>

)

}


export default Home;