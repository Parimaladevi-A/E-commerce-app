import {createContext,useState} from "react";


export const CartContext = createContext();



export function CartProvider({children}){


const [cart,setCart] = useState([]);



const addToCart = (product)=>{

setCart((oldCart)=>[...oldCart,product]);

};



return (

<CartContext.Provider

value={{
cart,
setCart,
addToCart
}}

>

{children}

</CartContext.Provider>


)


}