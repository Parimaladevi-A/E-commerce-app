import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";


function Login(){

const navigate = useNavigate();


const [email,setEmail] = useState("");
const [password,setPassword] = useState("");



const handleLogin = async(e)=>{

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


navigate("/home");


}

catch(error){

console.log(error);

alert(
error.response?.data?.message || "Login failed"
);

}


};



return (

<div className="auth-page">


<div className="auth-card">


<h1>Login</h1>


<form onSubmit={handleLogin}>


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

Login

</button>



</form>



<p>

New user?

<Link to="/register">

 Register

</Link>

</p>


</div>


</div>

)

}


export default Login;