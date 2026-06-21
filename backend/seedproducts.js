const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");


const products = [

{
    name:"iPhone 15",
    description:"Apple iPhone with powerful performance",
    price:70000,
    image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    category:"Mobiles",
    stock:10,
    rating:5
},


{
    name:"Samsung Galaxy S24",
    description:"Latest Samsung smartphone",
    price:65000,
    image:"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",
    category:"Mobiles",
    stock:15,
    rating:4
},


{
    name:"HP Laptop",
    description:"High performance laptop",
    price:55000,
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    category:"Laptops",
    stock:8,
    rating:4
},


{
    name:"Wireless Headphones",
    description:"Noise cancelling headphones",
    price:5000,
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category:"Accessories",
    stock:20,
    rating:4
},


{
    name:"Smart Watch",
    description:"Fitness tracking smartwatch",
    price:8000,
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category:"Wearables",
    stock:12,
    rating:5
}

];



mongoose.connect(process.env.MONGO_URL)
.then(async()=>{


    await Product.deleteMany();


    await Product.insertMany(products);


    console.log("Default products added");


    process.exit();


})
.catch((error)=>{

    console.log(error);

});