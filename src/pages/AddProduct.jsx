import {useState} from "react";
import API from "../services/api";


function AddProduct(){

const [name,setName]=useState("");
const [price,setPrice]=useState("");
const [description,setDescription]=useState("");


const addProduct = async(e)=>{

e.preventDefault();


await API.post("/products",{

name,
price,
description

});


alert("Product added");


}


return (

<div>

<h1>Add Product</h1>


<form onSubmit={addProduct}>


<input 
placeholder="Product name"
onChange={(e)=>setName(e.target.value)}
/>


<input
placeholder="Price"
onChange={(e)=>setPrice(e.target.value)}
/>


<input
placeholder="Description"
onChange={(e)=>setDescription(e.target.value)}
/>


<button>
Add
</button>


</form>

</div>

)

}

export default AddProduct;