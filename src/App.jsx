import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";


function App(){

return (

<BrowserRouter>

<Navbar />

<Routes>


<Route path="/" element={<Login/>}/>

<Route path="/register" element={<Register/>}/>


<Route path="/home" element={<Home/>}/>


<Route path="/products" element={<Products/>}/>


<Route path="/cart" element={<Cart/>}/>


<Route path="/payment" element={<Payment/>}/>


<Route path="/orders" element={<Orders/>}/>


</Routes>


</BrowserRouter>

)

}


export default App;