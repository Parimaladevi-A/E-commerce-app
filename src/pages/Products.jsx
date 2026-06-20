import { useEffect, useState } from "react";
import API from "../services/api";


function Products(){

    const [products,setProducts] = useState([]);


    const getProducts = async()=>{

        try{

            const res = await API.get("/products");

            setProducts(res.data);

        }
        catch(error){

            console.log(error);

        }

    };


    useEffect(()=>{

        getProducts();

    },[]);



    return (

        <div>

            <h1>Products</h1>


            {
                products.length === 0 ? (

                    <p>No products available</p>

                ) : (

                    products.map((product)=>(

                        <div key={product._id}>

                            <h2>{product.name}</h2>

                            <p>{product.description}</p>

                            <h3>₹ {product.price}</h3>

                            <hr/>

                        </div>

                    ))

                )
            }


        </div>

    )

}


export default Products;