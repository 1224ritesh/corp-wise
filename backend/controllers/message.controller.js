import createError from "../utils/createError.js";
import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";

export const createMessage = async (req, res, next) => {

    // newMessage is the message that we want to send to the user 
    const newMessage = new Message({
        conversationId: req.body.conversationId,
        userId: req.userId,
        desc: req.body.desc,
    })
    try {

        // savedMessage is the message that we saved in the database 
        // we update the last message of the conversation
        // we update the readBySeller and readByBuyer of the conversation 
        const savedMessage = await newMessage.save();


        await Conversation.findOneAndUpdate({ id: req.body.conversationId }, {

            $set: {
                readBySeller: req.isSeller,
                readByBuyer: !req.isSeller,
                lastMessage: req.body.desc,
            },
        }, { new: true }

        )

        res.status(201).send(savedMessage);


    } catch (err) {
        next(err);
    }
};



export const getMessages = async (req, res, next) => {

    // first to find the conversation id then easily find the messages and sent it the the user 
    // if the user is not in the conversation then send error

    try {

        const messages = await Message.find({ conversationId: req.params.id });
        res.status(200).send(messages);

    } catch (err) {
        next(err);
    }
};