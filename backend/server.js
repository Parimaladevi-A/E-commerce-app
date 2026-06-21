require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");


const app = express();


app.use(cors());

app.use(express.json());


// MongoDB connection

mongoose.connect(process.env.MONGO_URL)
.then(()=>{

    console.log("Database Connected");

})
.catch((err)=>{

    console.log("Mongo Error:",err.message);

});



// Routes

app.use("/api/users",userRoutes);

app.use("/api/products",productRoutes);

app.use("/api/orders",orderRoutes);



// Server

app.listen(5000,()=>{

    console.log("Server Started on port 5000");

});