import { Link } from "react-router-dom";

function Navbar(){

    return (
        <nav>
            <h2>E-Shop</h2>

            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>

        </nav>
    )
}

export default Navbar;