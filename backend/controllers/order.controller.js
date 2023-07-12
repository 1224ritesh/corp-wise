import createError from "../utils/createError.js";
import Order from "../models/order.model.js";
import Service from "../models/service.model.js";
import Stripe from "stripe";



export const intent = async (req, res, next) => {
    const stripe = new Stripe(process.env.STRIPE);

    // first fetch the service id 
    const service = await Service.findById(req.params.id)

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: service.price,
        currency: "inr",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });

    const newOrder = new Order({
        serviceId: service._id,
        img: service.cover,
        title: service.title,
        buyerId: req.userId,
        sellerId: service.userId,
        price: service.price,
        payment_intent: paymentIntent.id,
    })
    await newOrder.save();

    res.status(200).send({
        clientSecret: paymentIntent.client_secret,
    });

};


// for testing purpose
// export const createOrder = async (req, res, next) => {
//     try {

//         // to fetch the Service first for the price
//         const service = await Service.findById(req.params.serviceId)


//         const newOrder = new Order({
//             serviceId: service._id,
//             img: service.cover,
//             title: service.title,
//             buyerId: req.userId,
//             sellerId: service.userId,
//             price: service.price,
//             payment_intent: "temp string",
//         })
//         await newOrder.save();
//         res.status(200).send("successfully created order");

//     } catch (err) {
//         next(err);
//     }
// };

export const getOrders = async (req, res, next) => {
    try {


        const orders = await Order.find({
             ...(req.sellerId ? {sellerId: req.sellerId} : {buyerId: req.userId}),
           // $or: [{ buyerId: req.userId }, { sellerId: req.userId }],
            isCompleted: true,
        })
        res.status(200).send(orders);
    } catch (err) {
        next(err);
    }

};

// after payment is done this function will be called to update the order status
export const confirmOrder = async (req, res, next) => {
    try {


        const orders = await Order.findOneAndUpdate({
            payment_intent: req.body.payment_intent,
        }, {
            $set: {
                isCompleted: true,
            }
        })
        res.status(200).send("Your order is confirmed");
    } catch (err) {
        next(err);
    }

};