import { useEffect, useState } from "react";
import API from "../services/api";


function Orders(){

const [orders,setOrders] = useState([]);


useEffect(()=>{

const getOrders = async()=>{

try{

const res = await API.get("/orders");

setOrders(res.data);

}

catch(error){

console.log(error);

}

};


getOrders();


},[]);



return (

<div>

<h1>
My Orders 📦
</h1>


{
orders.length === 0 ?

<h2>
No orders found
</h2>


:

orders.map((order)=>(


<div 
className="product-card"
key={order._id}
>


<h3>
Order ID: {order._id}
</h3>


<h3>
Total: ₹ {order.totalAmount}
</h3>


<p>
Status: Processing
</p>


</div>


))

}


</div>

);

}


export default Orders;