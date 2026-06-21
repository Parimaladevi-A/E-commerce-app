const express = require("express");
const router = express.Router();

const Product = require("../models/Product");


// Get all products
router.get("/", async(req,res)=>{

    const products = await Product.find();

    res.json(products);

});

const {protect,admin} = require("../middleware/authMiddleware");
// Add product
router.post("/", async(req,res)=>{

    try{

        const product = await Product.create(req.body);

        res.json({
            message:"Product added",
            product
        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});
router.get("/", async(req,res)=>{

const products = await Product.find();


res.json(product);


});

module.exports = router;