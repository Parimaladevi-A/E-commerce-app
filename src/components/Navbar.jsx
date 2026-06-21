import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Navbar(){

const navigate = useNavigate();

const [search,setSearch] = useState("");



const handleSearch = ()=>{

navigate(`/products?search=${search}`);

};



return (

<nav className="navbar">


<div className="logo">

E-Shop

</div>



<div className="search">


<input

placeholder="Search products..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


<button onClick={handleSearch}>

🔍

</button>


</div>




<div className="nav-links">


<Link to="/home">

Home

</Link>



<Link to="/products">

Products

</Link>



<Link to="/cart">

Cart

</Link>



<Link to="/orders">

Orders

</Link>



<Link to="/">

Login

</Link>



</div>



</nav>

)

}


export default Navbar;