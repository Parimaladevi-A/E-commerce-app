import {useEffect,useState} from "react";
import {useParams,useNavigate} from "react-router-dom";
import API from "../services/api";


function EditProduct(){


const {id}=useParams();

const navigate=useNavigate();


const [product,setProduct]=useState({

name:"",
price:"",
description:"",
image:"",
category:"",
stock:""

});



useEffect(()=>{


const getProduct=async()=>{


const res=await API.get(`/products/${id}`);

setProduct(res.data);


};


getProduct();


},[id]);





const updateProduct=async(e)=>{


e.preventDefault();


try{


await API.put(`/products/${id}`,product);


alert("Product Updated");


navigate("/admin");


}
catch(error){

console.log(error);

}


};





return (

<div>


<h1>
Edit Product
</h1>



<form onSubmit={updateProduct}>


<input

value={product.name}

onChange={(e)=>setProduct({...product,name:e.target.value})}

/>


<input

value={product.price}

onChange={(e)=>setProduct({...product,price:e.target.value})}

/>



<input

value={product.description}

onChange={(e)=>setProduct({...product,description:e.target.value})}

/>



<input

value={product.image}

onChange={(e)=>setProduct({...product,image:e.target.value})}

/>



<input

value={product.category}

onChange={(e)=>setProduct({...product,category:e.target.value})}

/>



<input

value={product.stock}

onChange={(e)=>setProduct({...product,stock:e.target.value})}

/>



<button className="buy">

Update Product

</button>



</form>



</div>

)

}


export default EditProduct;