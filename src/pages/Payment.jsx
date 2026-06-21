import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Payment(){

const [method,setMethod] = useState("card");
const navigate = useNavigate();


const handlePay = ()=>{

setTimeout(()=>{

alert("Payment Successful 🎉");

navigate("/");

},1500);

};



return (

<div className="payment-container">


<h1>Checkout Payment</h1>



<h3>Total: ₹ 4999</h3>



{/* PAYMENT OPTIONS */}

<div className="payment-box">


<button onClick={()=>setMethod("card")}>
Card / Stripe
</button>


<button onClick={()=>setMethod("upi")}>
UPI Payment
</button>


</div>



{/* CARD PAYMENT MOCK */}

{
method === "card" && (

<div className="card-box">


<input placeholder="Card Number" />
<input placeholder="MM/YY" />
<input placeholder="CVV" />


<button onClick={handlePay}>
Pay Now
</button>


</div>

)

}



{/* UPI PAYMENT MOCK */}

{
method === "upi" && (

<div className="upi-box">


<h3>Pay using UPI</h3>


<img
src="https://upload.wikimedia.org/wikipedia/commons/5/5a/QR_code_example.png"
width="200"
/>


<p>Scan & Pay using Google Pay / PhonePe</p>


<button onClick={handlePay}>
I Have Paid
</button>


</div>

)

}



</div>

)

}


export default Payment;