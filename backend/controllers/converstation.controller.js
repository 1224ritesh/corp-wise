import createError from "../utils/createError.js";
import Conversation from "../models/conversation.model.js";

export const createConversation = async (req, res, next) => {

    const newConversation = new Conversation({

        // this is used to create the id of the conversation
        // if the user is seller then it will create the id with the sellerId and buyerId 
        // if the user is buyer then it will create the id with the buyerId and sellerId
        // this is used to create the unique id for the conversation
        id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
        sellerId: req.isSeller ? req.userId : req.body.to,
        buyerId: req.isSeller ? req.body.to : req.userId,
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
    });

    try {
        const savedConversation = await newConversation.save();
        res.status(201).send(savedConversation);

    } catch (err) {
        next(err);
    }
};


export const getConversations = async (req, res, next) => {
    try {
        const conversations = await Conversation.find(
            // this is used to find the conversation with the user who is logged in 
            // if the user is seller then it will find the conversation with the sellerId
            // if the user is buyer then it will find the conversation with the buyerId
            req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
        ).sort({ updatedAt: -1 });
        res.status(200).send(conversations);

    } catch (err) {
        next(err);
    }
};


export const getSingleConversation = async (req, res, next) => {
    try {
        const conversation = await Conversation.findOne({ id: req.params.id });
        if (!conversation) return next(createError(404, "not found"));
        res.status(200).send(conversation);
    } catch (err) {
        next(err);
    }
};


export const updateConversation = async (req, res, next) => {
    try {
        const updatedConversation = await Conversation.findOneAndUpdate({ id: req.params.id }, {
            // this $set is used to update the value of the field 
            $set: {
                // readBySeller: true,
                // readByBuyer: true,


                ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),

            },
        },
            { new: true }// if don't write this the not return to new conversation 
        );
        res.status(200).send(updatedConversation);

    } catch (err) {
        next(err);
    }
};