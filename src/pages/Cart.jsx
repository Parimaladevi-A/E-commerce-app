import { useNavigate } from "react-router-dom";


function Cart(){


const navigate = useNavigate();


const cartItems = JSON.parse(
localStorage.getItem("cart")
) || [];



const total = cartItems.reduce(

(sum,item)=>sum + item.price,

0

);



return (

<div className="cart-container">


<h1>Your Cart</h1>



{
cartItems.length===0 ?

<h2>
Cart is empty
</h2>


:

<>


{

cartItems.map((item,index)=>(


<div 
className="cart-card"
key={index}
>


<img

src={item.image}

width="120"

/>


<h3>
{item.name}
</h3>


<p>
₹ {item.price}
</p>


</div>


))

}



<h2>
Total : ₹ {total}
</h2>



<button

onClick={()=>navigate("/payment")}

>

Checkout

</button>



</>

}



</div>

)

}


export default Cart;