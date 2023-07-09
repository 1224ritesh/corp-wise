import createError from "../utils/createError.js";
import Order from "../models/order.model.js";
import Service from "../models/service.model.js";


export const createOrder = async (req, res, next) => {
    try {

        // to fetch the Service first for the price
        const service = await Service.findById(req.params.serviceId)
        
    
        const newOrder = new Order({
            serviceId: service._id,
            img: service.cover,
            title: service.title,
            buyerId: req.userId,
            sellerId: service.userId,
            price: service.price,
            payment_intent: "temp string",
        })
        await newOrder.save();
        res.status(200).send("successfully created order");
        
    } catch (err) {
        next(err);
    }
};

export const getOrders = async (req, res, next) => {
    try {
        
         
        const orders = await Order.find({
            // ...(req.sellerId ? {sellerId: req.sellerId} : {buyerId: req.userId}),
            $or: [{ buyerId: req.userId }, { sellerId: req.userId }],
            isCompleted: true,
    })
        res.status(200).send(orders);
    } catch (err) {
        next(err);
    }

};