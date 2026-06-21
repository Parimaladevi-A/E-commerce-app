import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";


function Register(){


const navigate = useNavigate();


const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");




const handleRegister = async(e)=>{

e.preventDefault();


try{


await API.post("/users/register",{

name,
email,
password

});



alert("Register successful");


navigate("/");


}

catch(error){


console.log(error);


alert(
error.response?.data?.message || "Register failed"
);


}


};




return (

<div className="auth-page">


<div className="auth-card">


<h1>Register</h1>



<form onSubmit={handleRegister}>


<input

placeholder="Name"

value={name}

onChange={(e)=>setName(e.target.value)}

required

/>



<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

required

/>



<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

required

/>



<button>

Register

</button>



</form>




<p>

Already have account?


<Link to="/">

 Login

</Link>


</p>



</div>


</div>

)


}


export default Register;