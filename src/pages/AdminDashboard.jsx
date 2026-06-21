import {useEffect,useState} from "react";
import API from "../services/api";
import {Link} from "react-router-dom";


function AdminDashboard(){


const [products,setProducts]=useState([]);
const [orders,setOrders]=useState([]);



const getData = async()=>{


try{


const productRes = await API.get("/products");

setProducts(productRes.data);



const orderRes = await API.get("/orders");

setOrders(orderRes.data);



}
catch(error){

console.log(error);

}

};



useEffect(()=>{

getData();

},[]);



const deleteProduct = async(id)=>{


try{

await API.delete(`/products/${id}`);


alert("Product deleted");


getData();


}
catch(error){

console.log(error);

}

};



return (

<div>


<h1>
Admin Dashboard
</h1>



<div className="admin-box">


<h2>
Products: {products.length}
</h2>


<h2>
Orders: {orders.length}
</h2>


<Link to="/add-product">

<button className="buy">
Add Product
</button>

</Link>
<Link to={`/edit-product/${product._id}`}>

<button className="buy">
Edit
</button>

</Link>

</div>




<h2>
Manage Products
</h2>



<div className="products">


{

products.map(product=>(


<div 
className="product-card"
key={product._id}
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



<button

className="buy"

onClick={()=>deleteProduct(product._id)}

>

Delete

</button>



</div>


))

}



</div>



</div>

)

}


export default AdminDashboard;