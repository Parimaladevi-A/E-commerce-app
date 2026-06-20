import {useState} from "react";
import API from "../services/api";


function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


const loginUser = async(e)=>{

e.preventDefault();

try{

const res = await API.post("/users/login",{
email,
password
});


localStorage.setItem(
"token",
res.data.token
);


alert("Login successful");


}
catch(err){

alert("Login failed");

}

}


return (

<div>

<h1>Login</h1>


<form onSubmit={loginUser}>


<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>


<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>


<button>
Login
</button>


</form>

</div>

)

}


export default Login;