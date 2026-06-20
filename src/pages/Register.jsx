import { useState } from "react";
import API from "../services/api";

function Register(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


const registerUser = async(e)=>{

e.preventDefault();

try{

const res = await API.post("/users/register",{
name,
email,
password
});

alert(res.data.message);

}
catch(err){

console.log(err.response?.data);

alert(err.response?.data?.message || "Registration failed");

}
}


return(
<div>

<h1>Register</h1>

<form onSubmit={registerUser}>

<input 
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input 
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input 
placeholder="Password"
type="password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button>
Register
</button>

</form>

</div>
)

}

export default Register;