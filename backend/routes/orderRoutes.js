const express = require("express");
const router = express.Router();

const Order = require("../models/Order");


// Create order
router.post("/", async(req,res)=>{

    try{

        const order = await Order.create(req.body);


        res.json({

            message:"Order placed successfully",
            order

        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});



// Get orders

router.get("/", async(req,res)=>{

    const orders = await Order.find();

    res.json(orders);

});


module.exports = router;